import { Module } from '@nestjs/common';
import { ReportUserController } from './report-user.controller';
import { ReportUserService } from './report-user.service';
import { SteamService } from '../steam/steam.service';
import { GCService } from '../cs2/steam-information/gc.service';

@Module({
  imports: [],
  controllers: [ReportUserController],
  providers: [ReportUserService, SteamService, GCService],
})
export class ReportUserModule {}
