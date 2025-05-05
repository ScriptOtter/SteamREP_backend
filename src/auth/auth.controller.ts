import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokensDto } from './dto/tokens.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() dto: RegisterDto) {
    return this.authService.registerUser(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() dto: LoginDto) {
    return this.authService.loginUser(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('verify')
  verify(@Body() dto: TokensDto) {
    return this.authService.verifyToken(dto);
  }
}
