import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { TokensDto } from './dto/tokens.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() dto: RegisterDto, @Res() res: Response) {
    return this.authService.registerUser(dto, res);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() dto: LoginDto, @Res() res: Response) {
    return this.authService.loginUser(dto, res);
  }

  @HttpCode(HttpStatus.OK)
  @Post('verify')
  verify(@Body() dto: TokensDto) {
    return this.authService.verifyToken(dto);
  }
}
