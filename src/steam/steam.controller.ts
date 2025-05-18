import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { SteamService } from './steam.service';
import { SteamPrismaService } from './steam-prisma.service';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';
import { Request } from 'express';

@Controller()
export class SteamController {
  constructor(
    private readonly steamService: SteamService,
    private readonly steamPrisma: SteamPrismaService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post(':steamid')
  getOrCreateSteamProfile(@Param('steamid') dto: string) {
    return this.steamPrisma.createSteamUser(dto);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Put('/verify/:steamid')
  verifyAccountViaSteam(
    @Req() req: Request,
    @Param('steamid') steamid: string,
  ) {
    return this.steamPrisma.verifyAccountViaSteam(req, steamid);
  }
}
