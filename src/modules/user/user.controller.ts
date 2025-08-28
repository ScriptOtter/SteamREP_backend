import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Get('profile/me')
  getMyData(@Req() req: Request) {
    return this.userService.getMyData(req);
  }

  @HttpCode(HttpStatus.OK)
  @Get('profile/:id')
  getProfile(@Param('id') id: string) {
    return this.userService.getUserProfile(id);
  }
}
