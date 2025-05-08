import { Module } from '@nestjs/common';
import { SteamService } from './steam.service';
import { SteamController } from './steam.controller';
import { SteamPrismaService } from './steam-prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SteamController],
  providers: [SteamService, SteamPrismaService],
})
export class SteamModule {}
