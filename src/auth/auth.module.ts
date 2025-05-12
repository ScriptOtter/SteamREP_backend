import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';
import {
  JwtAccessStrategy,
  JwtRefreshStrategy,
} from './strategies/jwt.strategy';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TokenService } from './tokens/tokens.service';

@Module({
  imports: [PrismaModule, PassportModule],
  providers: [AuthService, TokenService, JwtAccessStrategy, JwtRefreshStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
