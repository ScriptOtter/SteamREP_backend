import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { CronController } from './cron.controller';
import { DownloadDemoService } from '../cs2/download-demo/download-demo.service';
import { GCService } from '../cs2/steam-information/gc.service';

@Module({
  controllers: [CronController],
  providers: [CronService, GCService, DownloadDemoService],
})
export class CronModule {}
