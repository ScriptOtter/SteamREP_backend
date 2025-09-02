import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/login-user.dto';
import { RegisterDto } from './dto/register-user.dto';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request, Response } from 'express';
import { TokenService } from './tokens/tokens.service';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';
import { API_AVATAR } from '../api/generateAvatar';
import { VerificationService } from './verification/verification.service';

@Injectable()
export class AuthService {
  constructor(
    private tokens: TokenService,
    private prisma: PrismaService,
    private tokenService: TokenService,
    private readonly verificationService: VerificationService,
  ) {}

  async registerUser(
    dto: RegisterDto,
    req: Request,
    res: Response,
  ): Promise<any> {
    if (dto.password !== dto.confirmPassword)
      throw new BadRequestException('Password do not match!');

    dto.email = dto.email.toLowerCase().trim();

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    try {
      const user = await this.prisma.user.create({
        data: {
          username: dto.username,
          password: hashedPassword,
          email: dto.email,
          avatar: API_AVATAR(dto.username),
        },
      });
      await this.verificationService.sendVerificationToken(user);
      res.json('An email has been sent to your email.');
    } catch (e: unknown) {
      if (e instanceof PrismaClientKnownRequestError)
        throw new BadRequestException(e?.meta?.target);
    }
  }

  async loginUser(dto: LoginDto, res: Response): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { username: dto.username },
      include: { steamUser: {} },
    });
    if (!user) {
      throw new UnauthorizedException('Wrong password!');
    }
    const rightPassword = await bcrypt.compare(dto.password, user.password);
    if (!rightPassword) {
      throw new UnauthorizedException('Wrong password!');
    }

    if (!user.isEmailVerified) {
      await this.verificationService.sendVerificationToken(user);
      throw new BadRequestException('Email not verified!');
    }
    const { accessToken, refreshToken } = await this.tokens.getTokens(user.id);

    await this.prisma.jwtToken.create({
      data: {
        userId: user.id,
        refreshToken: refreshToken,
      },
    });
    if (!this.tokens.sendTokens(res, user, accessToken, refreshToken)) {
      return;
    }
  }

  async refreshAccessToken(req: Request, res: Response) {
    if (req.cookies.SteamREP_refreshToken) {
      try {
        const userId = await this.tokenService.getIdFromToken(req);
        const user = await this.prisma.user.findUnique({
          where: { id: userId },
        });
        if (!user) {
          throw new UnauthorizedException('User not found!');
        }

        //console.log('User найден');
        if (!userId) {
          console.log('Token expired!');
          throw new UnauthorizedException('User not found!');
        }

        const { accessToken, refreshToken } =
          await this.tokens.getTokens(userId);

        if (!this.tokens.sendTokens(res, user, accessToken, refreshToken)) {
          return;
        }

        const token = await this.prisma.jwtToken.deleteMany({
          where: { refreshToken: req.cookies.SteamREP_refreshToken },
        });

        if (!token) {
          console.log('Token not updated');
          return { message: 'TOKEN NOT UPDATED!' };
          throw new UnauthorizedException('Token not updated!');
        }

        const createToken = await this.prisma.jwtToken.create({
          data: {
            userId: userId,
            refreshToken: refreshToken,
          },
        });
        if (!createToken) {
          console.log('createToken error');
          return;
        }
        console.log('Updated');

        res.json({ message: 'Tokens updated!' });
      } catch (e) {
        console.log(e);
        return e;
      }
    }
  }

  async logout(req: Request, res: Response) {
    const refreshToken = req.cookies.SteamREP_refreshToken;
    if (!(refreshToken == '')) {
      try {
        const tokenToDelete = await this.prisma.jwtToken.findFirst({
          where: { refreshToken: refreshToken },
        });
        if (!tokenToDelete) {
          throw new UnauthorizedException();
        }
        const token = await this.prisma.jwtToken.delete({
          where: { id: tokenToDelete.id },
        });
        if (!token) {
          throw new UnauthorizedException();
        }
        console.log('UDALEN');
        res.cookie('SteamREP_refreshToken', '');
        res.cookie('SteamREP_accessToken', '');
        res.json('logout');
      } catch (e) {
        console.log(e);
      }
    }
  }
}
