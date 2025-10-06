import { Controller, Get, Param, Res } from '@nestjs/common';
import { MatchService } from './match.service';
import { Response } from 'express';

@Controller('cs2')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get('getMatches/:steamid')
  async getMatchesStatisticBySteamId(
    @Param('steamid') steamid: string,
    @Res() res: Response,
  ) {
    return this.matchService.getMatchesStatisticBySteamId(steamid, res);
  }

  @Get('getMatch/:id')
  async getMatchStatistic(@Param('id') id: string, @Res() res: Response) {
    return this.matchService.getMatchStatistic(id, res);
  }
}
