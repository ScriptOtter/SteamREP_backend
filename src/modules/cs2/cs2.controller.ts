import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Cs2Service } from './cs2.service';
import { Request } from 'express';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';

@Controller('cs2')
export class Cs2Controller {
  constructor(private readonly cs2Service: Cs2Service) {}
  @UseGuards(JwtAccessGuard)
  @Get('getCodes')
  public async getCodes(@Req() req: Request) {
    return this.cs2Service.getCodes(req);
  }
  @UseGuards(JwtAccessGuard)
  @Post('saveSharedCode')
  public async saveSharedCode(
    @Req() req: Request,
    @Body() dto: { sharedCode: string },
  ) {
    console.log(dto);
    return this.cs2Service.saveSharedCode(req, dto.sharedCode);
  }
  @UseGuards(JwtAccessGuard)
  @Post('saveAuthenticationCode')
  public async saveAuthenticationCode(
    @Req() req: Request,
    @Body() dto: { authenticationCode: string },
  ) {
    return this.cs2Service.saveAuthenticationCode(req, dto.authenticationCode);
  }

  @Get('getLastMatches')
  public async getLastMathes() {
    return this.cs2Service.getLastMathes();
  }

  @Get('analyzedMatches')
  public async getAnalyzedMatches(
    @Query('page') page: string,
    @Query('limit') limit: string,
  ) {
    return this.cs2Service.getAnalyzedMatches(Number(page), Number(limit));
  }

  @Get('bans')
  public async getBans() {
    return this.cs2Service.getBans();
  }
}
