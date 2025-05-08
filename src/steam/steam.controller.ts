import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { SteamService } from './steam.service';
import { SteamUrlDto } from './dto/steamUrl.dto';
import { Steam64IdDto } from './dto/steamId.dto';
import { SteamPrismaService } from './steam-prisma.service';

@Controller()
export class SteamController {
  constructor(
    private readonly steamService: SteamService,
    private readonly steamPrisma: SteamPrismaService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('steam64id')
  getSteam64Id(@Body() dto: SteamUrlDto) {
    return this.steamService.getSteam64Id(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post(':steamid')
  createUser(@Param('steamid') dto: Steam64IdDto) {
    return this.steamPrisma.createSteamUser(dto);
  }
}
