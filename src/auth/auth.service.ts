import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { LoginDto } from './dto/login-user.dto';
import { RegisterDto } from './dto/register-user.dto';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokensDto } from './dto/tokens.dto';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  private sendTokens(
    res: Response,
    user: LoginDto,
    accessToken: string,
    refreshToken: string,
  ): Boolean {
    try {
      res.cookie('SteamREP_accessToken', accessToken, {
        httpOnly: true,
        secure: false,
      });
      res.cookie('SteamREP_refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
      });
      res.json(user);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async getTokens(id: string): Promise<Partial<any>> {
    try {
      const accessToken = await this.jwtService.signAsync(
        { id },
        { secret: process.env.JWT_ACCESS_SECRET!, expiresIn: '1s' },
      );
      const refreshToken = await this.jwtService.signAsync(
        { id },
        { secret: process.env.JWT_REFRESH_SECRET!, expiresIn: '7d' },
      );

      return { accessToken, refreshToken };
    } catch (e) {
      console.log(e);
    }
    return {};
  }

  async registerUser(dto: RegisterDto, res: Response): Promise<any> {
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
        },
      });

      const { accessToken, refreshToken } = await this.getTokens(user.id);

      const userToken = await this.prisma.jwtToken.create({
        data: {
          userId: user.id,
          refreshToken: refreshToken,
        },
      });
      if (!this.sendTokens(res, user, accessToken, refreshToken)) {
        return;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async loginUser(dto: LoginDto, res: Response): Promise<any> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { username: dto.username },
      });
      if (!user) {
        throw new UnauthorizedException('Wrong password!');
      }
      const rightPassword = await bcrypt.compare(dto.password, user.password);
      if (!rightPassword) {
        throw new UnauthorizedException('Wrong password!');
      }
      const { accessToken, refreshToken } = await this.getTokens(user.id);

      const userToken = await this.prisma.jwtToken.create({
        data: {
          userId: user.id,
          refreshToken: refreshToken,
        },
      });
      if (!this.sendTokens(res, user, accessToken, refreshToken)) {
        return;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async refreshAccessToken(req: Request, res: Response) {
    if (!(req.cookies.SteamREP_refreshToken == '')) {
      try {
        const user = await this.prisma.jwtToken.findFirst({
          where: { refreshToken: req.cookies.SteamREP_refreshToken },
        });
        if (!user) {
          throw new UnauthorizedException();
        }
        const { accessToken, refreshToken } = await this.getTokens(user.id);
        res.cookie('SteamREP_refreshToken', refreshToken);
        res.cookie('SteamREP_accessToken', accessToken);
        const token = await this.prisma.jwtToken.update({
          where: { id: user.id },
          data: { refreshToken: refreshToken },
        });
        if (!token) {
          throw new UnauthorizedException();
        }

        res.json('logout');
      } catch (e) {
        console.log(e);
      }
    }
  }

  async logout(req: Request, res: Response) {
    const refreshToken = req.cookies.SteamREP_refreshToken;
    console.log(refreshToken);
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
        res.cookie('SteamREP_refreshToken', '');
        res.cookie('SteamREP_accessToken', '');
        res.json('logout');
      } catch (e) {
        console.log(e);
      }
    }
  }
}
