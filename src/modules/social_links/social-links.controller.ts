import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { SaveSocialLinksDto } from './dto/saveSocialLinks.dto';
import { SocialLinksService } from './social-links.service';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';

@Controller('social-links')
export class SocialLinksController {
  constructor(private readonly socialLinksService: SocialLinksService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Post('update')
  saveSocialLinks(@Body() dto: SaveSocialLinksDto, @Req() req: Request) {
    return this.socialLinksService.saveSocialLinks(dto, req);
  }

  @HttpCode(HttpStatus.OK)
  @Get('get/:id')
  getLinks(@Param('id') id: string) {
    return this.socialLinksService.getSocialLinks(id);
  }
}
