import { Module } from '@nestjs/common';
import { DemoAnalyseService } from './demo-analyse.service';
import { DemoAnalyseController } from './demo-analyse.controller';

@Module({
  controllers: [DemoAnalyseController],
  providers: [DemoAnalyseService],
})
export class DemoAnalyseModule {}
