import { ConflictException, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenService } from '../auth/tokens/tokens.service';
import { NotificationType } from 'generated/prisma';

interface NotificationsTemplate {
  type: NotificationType;
  title: string;
  description: string;
}

@Injectable()
export class NotificationsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly token: TokenService,
  ) {}

  async createNotification(userId: string, templete: NotificationsTemplate) {
    await this.prismaService.notifications.create({
      data: {
        userId,
        type: templete.type,
        title: templete.title,
        description: templete.description,
      },
    });
    return true;
  }

  async getMyNotifications(req: Request) {
    const userId = await this.token.getIdFromToken(req);
    return await this.prismaService.notifications.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        type: true,
        title: true,
        description: true,
        isViewed: true,
        createdAt: true,
      },
    });
  }

  async setViewedNotification(req: Request, id: string) {
    const userId = await this.token.getIdFromToken(req);
    const viewed = await this.prismaService.notifications.update({
      where: { id, userId },
      data: { isViewed: true },
    });
    if (!viewed) {
      throw new ConflictException('Notification already viewed!');
    }
    return true;
  }
}
