import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { PassportModule } from '@nestjs/passport';
import {
  JwtAccessStrategy,
  JwtRefreshStrategy,
} from './strategies/jwt.strategy';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';
import { JwtRefreshGuard } from 'src/guards/jwt_refresh.guard';
import { VerificationModule } from './verification/verification.module';
import { TokenModule } from './tokens/token.module';
import { PasswordRecoveryModule } from './password-recovery/password-recovery.module';
import { NotificationsService } from '../notifications/notifications.service';
import { SteamModule } from '../steam/steam.module';
import { SteamService } from '../steam/steam.service';

@Module({
  imports: [
    PassportModule,
    VerificationModule,
    TokenModule,
    PasswordRecoveryModule,
    SteamModule, // Убедитесь, что вы импортируете SteamModule
  ],
  providers: [
    AuthService,
    NotificationsService,
    JwtAccessGuard,
    JwtAccessStrategy,
    JwtRefreshGuard,
    JwtRefreshStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService, JwtAccessGuard, JwtRefreshGuard],
})
export class AuthModule {}
