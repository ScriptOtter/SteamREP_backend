import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/login-user.dto';
import { Request, Response } from 'express';
import { User } from 'generated/prisma';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  public async getTokens(id: string): Promise<Partial<any>> {
    try {
      console.log('getTokens - ' + id);
      const accessToken = await this.jwtService.signAsync(
        { id },
        { secret: process.env.JWT_ACCESS_SECRET!, expiresIn: '15m' },
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

  public sendTokens(
    res: Response,
    user: User,
    accessToken: string,
    refreshToken: string,
  ): Boolean {
    try {
      res.cookie('SteamREP_accessToken', accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      });
      res.cookie('SteamREP_refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      });
      const { password, ...userData } = user;
      res.json({ ...userData, accessToken, refreshToken });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  public sendTokensSteam(
    res: Response,
    user: User,
    accessToken: string,
    refreshToken: string,
  ): Boolean {
    try {
      res.cookie('SteamREP_accessToken', accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      });
      res.cookie('SteamREP_refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      });

      res.redirect(process.env.ALLOWED_ORIGIN!);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  public async getIdFromToken(req: Request): Promise<string> {
    try {
      const token = req.cookies.SteamREP_refreshToken;

      const id = await this.jwtService.verify(token, {
        secret: process.env.JWT_REFRESH_SECRET!,
      }).id;

      return id;
    } catch (e) {
      throw new UnauthorizedException('cant get id');
    }
  }
}
