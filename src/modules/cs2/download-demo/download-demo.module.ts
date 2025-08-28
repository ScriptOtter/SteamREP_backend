import { Module } from '@nestjs/common';
import { DownloadDemoService } from './download-demo.service';

@Module({
  providers: [DownloadDemoService],
})
export class DownloadDemoModule {}
