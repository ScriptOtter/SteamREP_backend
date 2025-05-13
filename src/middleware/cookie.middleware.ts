import {
  BadGatewayException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class Prisma {
  constructor(private prisma: PrismaService) {}
  public async searchUser(refreshToken): Promise<any> {
    try {
      const user = await this.prisma.jwtToken.findFirst({
        where: { refreshToken: refreshToken },
      });
      console.log(user);
      return user;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

export class CookieMiddleware extends Prisma implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    cookieParser()(req, res, async (err) => {
      if (err) {
        return next(err);
      }

      console.log(req.cookies.SteamREP_refreshToken);

      try {
        const user = await this.searchUser(req.cookies.SteamREP_refreshToken);

        console.log(user);
      } catch (error) {
        return next(error); // Обработка ошибок при поиске пользователя
      }

      next(); // Продолжаем обработку запроса
    });
  }
}
