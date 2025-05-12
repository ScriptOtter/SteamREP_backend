import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SteamService } from './steam.service';
import { SteamUrlDto } from './dto/steamUrl.dto';
import { Steam64IdDto } from './dto/steamId.dto';
import { SteamPrismaService } from './steam-prisma.service';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';

@Controller()
export class SteamController {
  constructor(
    private readonly steamService: SteamService,
    private readonly steamPrisma: SteamPrismaService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Post(':steamid')
  createSteamUser(@Param('steamid') dto: string) {
    return this.steamPrisma.createSteamUser(dto);
  }
}
