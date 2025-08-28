import { Module } from '@nestjs/common';
import { ReportUserController } from './report-user.controller';
import { ReportUserService } from './report-user.service';
import { SteamService } from '../steam/steam.service';

@Module({
  imports: [],
  controllers: [ReportUserController],
  providers: [ReportUserService, SteamService],
})
export class ReportUserModule {}
