import { Body, Controller, Get, Post } from '@nestjs/common';

import { Response } from 'express';
import { GCService } from './gc.service';

@Controller('cs2')
export class GCController {
  constructor(private readonly cs: GCService) {}

  @Post('userdata')
  async getAccountInformation(@Body() dto: { steamid: string }) {
    const { steamid } = dto;
    return this.cs.getAccountInformation(steamid);
  }

  @Get('matchdata')
  async getMatchInfoFromSharedCode(@Body() dto: { sharedCode: string }) {
    const { sharedCode } = dto;
    return this.cs.getMatchInfoFromSharedCode(sharedCode);
  }
}
