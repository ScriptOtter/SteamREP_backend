import { Module } from '@nestjs/common';
import { GeneralPlayerStatisticsService } from './general-player-statistics.service';
import { GeneralPlayerStatisticsController } from './general-player-statistics.controller';

@Module({
  controllers: [GeneralPlayerStatisticsController],
  providers: [GeneralPlayerStatisticsService],
})
export class GeneralPlayerStatisticsModule {}
