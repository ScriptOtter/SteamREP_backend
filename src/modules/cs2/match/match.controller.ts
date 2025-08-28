import { Controller, Get, Param, Res } from '@nestjs/common';
import { MatchService } from './match.service';
import { Response } from 'express';

@Controller('cs2/match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get(':steamid')
  async getHistoryMatches(
    @Param('steamid') steamid: string,
    @Res() res: Response,
  ) {
    return this.matchService.getHistoryMatches(steamid, res);
  }
}
