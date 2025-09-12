import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';
import { NotificationsService } from './notifications.service';
import { Request } from 'express';

@Controller('')
export class NotificationsController {
  constructor(private readonly notificationService: NotificationsService) {}
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Get('getMyNotifications')
  getMyNotifications(@Req() req: Request) {
    return this.notificationService.getMyNotifications(req);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Post('setViewedNotification')
  setViewedNotification(@Req() req: Request, @Body() dto: { id: string }) {
    return this.notificationService.setViewedNotification(req, dto.id);
  }
}
