import { Module } from '@nestjs/common';
import { GCController } from './gc.controller';
import { GCService } from './gc.service';

@Module({
  controllers: [GCController],
  providers: [GCService],
})
export class GCModule {}
