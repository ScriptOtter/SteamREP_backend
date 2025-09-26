import { Controller, Get, Param } from '@nestjs/common';
import { GeneralPlayerStatisticsService } from './general-player-statistics.service';

@Controller('cs2stats')
export class GeneralPlayerStatisticsController {
  constructor(private readonly stats: GeneralPlayerStatisticsService) {}
  @Get('get/:id')
  public async getCS2Stats(@Param('id') steamid: string) {
    return this.stats.getCS2Stats(steamid);
  }
}
