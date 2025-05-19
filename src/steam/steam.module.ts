import { Module } from '@nestjs/common';
import { SteamService } from './steam.service';
import { SteamController } from './steam.controller';
import { SteamPrismaService } from './steam-prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { UserService } from 'src/user/user.service';
import { SteamOAuth } from './steam.oauth';

@Module({
  imports: [PrismaModule],
  controllers: [SteamController],
  providers: [
    SteamService,
    SteamPrismaService,
    TokenService,
    UserService,
    SteamOAuth,
  ],
})
export class SteamModule {}
