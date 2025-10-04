import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';

import { GCService } from '../steam-information/gc.service';

import { DownloadDemoService } from '../download-demo/download-demo.service';

@Module({
  controllers: [MatchController],
  providers: [MatchService, GCService, DownloadDemoService],
  imports: [],
})
export class MatchModule {}
