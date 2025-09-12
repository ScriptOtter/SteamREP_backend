import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TrackingUsersService } from './tracking-users.service';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';
import { Request } from 'express';

@Controller('tracking-users')
export class TrackingUsersController {
  constructor(private readonly trackingUsersService: TrackingUsersService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Get('getUsers')
  getTrackingUsers(@Req() req: Request) {
    return this.trackingUsersService.getTrackingUsers(req);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Post('addUser')
  addTrackingUsers(@Body() dto: { steamid: string }, @Req() req: Request) {
    return this.trackingUsersService.addTrackingUsers(dto.steamid, req);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Delete('deleteUser/:steamid')
  createReport(@Param('steamid') steamid, @Req() req: Request) {
    return this.trackingUsersService.deleteTrackingUser(steamid, req);
  }
}
