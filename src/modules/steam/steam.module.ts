import { Module } from '@nestjs/common';
import { SteamService } from './steam.service';
import { SteamController } from './steam.controller';
import { SteamPrismaService } from './steam-prisma.service';

import { SteamOAuth } from './steam.oauth';
import { TokenService } from '../auth/tokens/tokens.service';
import { UserService } from '../user/user.service';
import { NotificationsService } from '../notifications/notifications.service';

@Module({
  imports: [],
  controllers: [SteamController],
  providers: [
    SteamService,
    TokenService,
    UserService,
    SteamOAuth,
    SteamPrismaService, // Убедитесь, что этот сервис объявлен здесь
    NotificationsService,
  ],
  exports: [SteamOAuth, SteamPrismaService], // Экспортируйте SteamPrismaService
})
export class SteamModule {}
