import { Body, Controller, Get, Res } from '@nestjs/common';

import { Response } from 'express';
import { GCService } from './gc.service';

@Controller('cs2')
export class GCController {
  constructor(private readonly cs: GCService) {}

  @Get('userdata')
  async getAccountInformation(
    @Body() dto: { steamid: string },
    @Res() res: Response,
  ) {
    const { steamid } = dto;
    return this.cs.getAccountInformation(steamid, res);
  }

  @Get('matchdata')
  async getMatchInfoFromSharedCode(
    @Body() dto: { sharedCode: string },
    @Res() res: Response,
  ) {
    const { sharedCode } = dto;
    return this.cs.getMatchInfoFromSharedCode(sharedCode, res);
  }
}
