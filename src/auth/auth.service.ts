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
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';
import { API_AVATAR } from 'src/api/generateAvatar';
import { genRandomCode } from 'src/lib/randomInt';
import { verificationAccount } from 'src/email/email.service';

@Injectable()
export class AuthService {
  constructor(
    private tokens: TokenService,
    private prisma: PrismaService,
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) {}

  async registerUser(
    dto: RegisterDto,
    req: Request,
    res: Response,
  ): Promise<any> {
    if (dto.password !== dto.confirmPassword)
      throw new BadRequestException('Password do not match!');

    dto.email = dto.email.toLowerCase().trim();

    try {
      const hashedPassword = await bcrypt.hash(dto.password, 10);

      const user = await this.prisma.user.create({
        data: {
          username: dto.username,
          password: hashedPassword,
          email: dto.email,
          avatar: API_AVATAR(dto.username),
        },
      });

      const { accessToken, refreshToken } = await this.tokens.getTokens(
        user.id,
      );

      const userToken = await this.prisma.jwtToken.create({
        data: {
          userId: user.id,
          refreshToken: refreshToken,
        },
      });
      if (!userToken) {
        throw new BadRequestException();
      }
      const code = genRandomCode();
      const emailVerify = await this.prisma.emailVerify.create({
        data: { userId: user.id, code: code },
      });
      if (!emailVerify) {
        await this.prisma.user.delete({ where: { id: user.id } });
        throw new BadRequestException('Try again!');
      }
      verificationAccount(
        user.username,
        code.toString(),
        'mainfrolov@gmail.com',
        req,
        res,
      );
      if (!this.tokens.sendTokens(res, user, accessToken, refreshToken)) {
        return;
      }
    } catch (e: unknown) {
      if (e instanceof PrismaClientKnownRequestError) {
        console.log('AUTH_REGISTER', e.meta);
        throw new BadRequestException(e.meta);
      } else console.error(e);
    }
  }

  async emailVerify(
    code: number,
    req: Request,
    res: Response,
  ): Promise<Partial<any>> {
    const userId = await this.tokenService.getIdFromToken(req);

    console.log('emailVerif');
    const emailVerify = await this.prisma.emailVerify.findFirst({
      where: { userId: userId },
    });

    if (emailVerify?.code != code) {
      await this.prisma.emailVerify.deleteMany({ where: { userId: userId } });
      await this.prisma.jwtToken.deleteMany({ where: { userId: userId } });
      await this.prisma.user.deleteMany({ where: { id: userId } });

      throw new BadRequestException(
        'Invalid code! Your account has been deleted!',
      );
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: { role: 'ACTIVE' },
    });
    await this.prisma.emailVerify.deleteMany({
      where: { userId: userId },
    });
    res.json({ message: 'Email verified!' });

    return {};
  }
  async loginUser(dto: LoginDto, res: Response): Promise<any> {
    try {
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
      const { accessToken, refreshToken } = await this.tokens.getTokens(
        user.id,
      );

      const userToken = await this.prisma.jwtToken.create({
        data: {
          userId: user.id,
          refreshToken: refreshToken,
        },
      });
      if (!this.tokens.sendTokens(res, user, accessToken, refreshToken)) {
        return;
      }
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Wrong login or password!');
    }
  }

  async refreshAccessToken(req: Request, res: Response) {
    //console.log(req.cookies);
    if (req.cookies.SteamREP_refreshToken) {
      try {
        const userId = await this.tokenService.getIdFromToken(req);
        const user = await this.prisma.user.findUnique({
          where: { id: userId },
        });
        if (!user) {
          throw new UnauthorizedException('User not found!');
        }
        console.log(userId);
        //console.log('User найден');
        if (!userId) {
          console.log('Token expired!');
          throw new UnauthorizedException('User not found!');
        }
        console.log('refreshAccessToken = ' + userId);

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
