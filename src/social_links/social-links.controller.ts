import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
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
}
