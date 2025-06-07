import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { SteamService } from './steam.service';
import { SteamPrismaService } from './steam-prisma.service';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';
import { Request, Response } from 'express';
import { SteamOAuth } from './steam.oauth';

@Controller()
export class SteamController {
  constructor(
    private readonly steamService: SteamService,
    private readonly steamPrisma: SteamPrismaService,
    private readonly steamOAuth: SteamOAuth,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('steam/:steamid')
  getOrCreateSteamProfile(@Param('steamid') dto: string) {
    return this.steamPrisma.createSteamUser(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('steam/verify')
  verifyAccountViaSteam(@Req() req: Request, @Res() res: Response) {
    console.log('STEAM VERIFY');
    res.redirect(
      this.steamOAuth.generate_redirect(
        process.env.SERVER_URL,
        process.env.SERVER_URL + 'steam/auth',
      ),
    );
  }

  @HttpCode(HttpStatus.OK)
  @Get('steam/auth')
  steamAuth(@Req() req: Request, @Res() res: Response) {
    this.steamPrisma.steamAuth(req, res);
  }
}
