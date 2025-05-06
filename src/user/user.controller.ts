import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserSteamDto } from './dto/user-steam.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Get('profiles/:id')
  getProfile(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @HttpCode(HttpStatus.OK)
  @Post('verifySteam')
  verifySteam(@Body() dto: UserSteamDto) {
    return this.userService.changeUserId(dto);
  }
}
