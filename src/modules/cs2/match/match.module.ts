import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { DemoAnalyseModule } from '../demo-analyse/demo-analyse.module';
import { GCService } from '../steam-information/gc.service';
import { DemoAnalyseService } from '../demo-analyse/demo-analyse.service';
import { DownloadDemoService } from '../download-demo/download-demo.service';

@Module({
  controllers: [MatchController],
  providers: [MatchService, GCService, DemoAnalyseService, DownloadDemoService],
  imports: [DemoAnalyseModule],
})
export class MatchModule {}
