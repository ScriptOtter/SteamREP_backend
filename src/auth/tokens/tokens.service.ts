import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/login-user.dto';
import { Request, Response } from 'express';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  public async getTokens(id: string): Promise<Partial<any>> {
    try {
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
}
