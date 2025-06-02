import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { ReportUserController } from './report-user.controller';
import { ReportUserService } from './report-user.service';
import { SteamService } from 'src/steam/steam.service';

@Module({
  imports: [PrismaModule],
  controllers: [ReportUserController],
  providers: [ReportUserService, TokenService, SteamService],
})
export class ReportUserModule {}
