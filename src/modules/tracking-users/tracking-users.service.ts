import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenService } from '../auth/tokens/tokens.service';

@Injectable()
export class TrackingUsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly token: TokenService,
  ) {}
  async addTrackingUsers(id: string, req: Request) {
    const userId = await this.token.getIdFromToken(req);
    if (!userId) {
      throw new UnauthorizedException('Login again!');
    }
    const steamUser = await this.prismaService.steamUser.findUnique({
      where: { id },
    });
    if (!steamUser) {
      throw new BadRequestException('User not found!');
    }
    const trackingUser = await this.prismaService.trackingUser.create({
      data: {
        userId: userId,
        name: steamUser?.personaName || ' ',
        steamid: id,
        avatar: steamUser.avatar,
      },
    });
    if (!trackingUser) {
      throw new BadRequestException('Failed to add user');
    }
    return true;
  }

  async getTrackingUsers(req: Request) {
    const userId = await this.token.getIdFromToken(req);
    if (!userId) {
      throw new UnauthorizedException('Login again!');
    }
    return await this.prismaService.trackingUser.findMany({
      where: { userId },
    });
  }

  async deleteTrackingUser(steamid: string, req: Request) {
    const userId = await this.token.getIdFromToken(req);
    if (!userId) {
      throw new UnauthorizedException('Login again!');
    }
    await this.prismaService.trackingUser.deleteMany({
      where: { steamid, userId },
    });
    return true;
  }
}
