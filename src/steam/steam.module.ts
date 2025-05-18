import { Module } from '@nestjs/common';
import { SteamService } from './steam.service';
import { SteamController } from './steam.controller';
import { SteamPrismaService } from './steam-prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [PrismaModule],
  controllers: [SteamController],
  providers: [SteamService, SteamPrismaService, TokenService, UserService],
})
export class SteamModule {}
