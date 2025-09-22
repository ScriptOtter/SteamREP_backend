import { Module } from '@nestjs/common';
import { DownloadDemoService } from './download-demo.service';
import { GCModule } from '../steam-information/gc.module';
import { GCService } from '../steam-information/gc.service';

@Module({
  imports: [GCModule],
  providers: [DownloadDemoService, GCService],
})
export class DownloadDemoModule {}
