import { Global, Module } from '@nestjs/common';
import { SteamService } from './steam.service';
import { SteamController } from './steam.controller';
import { SteamPrismaService } from './steam-prisma.service';

import { SteamOAuth } from './steam.oauth';
import { TokenService } from '../auth/tokens/tokens.service';
import { UserService } from '../user/user.service';
import { NotificationsService } from '../notifications/notifications.service';

@Global()
@Module({
  imports: [],
  controllers: [SteamController],
  providers: [
    SteamService,

    TokenService,
    UserService,
    SteamOAuth,
    SteamPrismaService,
    NotificationsService,
  ],
  exports: [SteamOAuth, SteamPrismaService],
})
export class SteamModule {}
