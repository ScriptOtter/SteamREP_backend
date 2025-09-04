import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/modules/auth/auth.module';
import { PasswordRecoveryModule } from 'src/modules/auth/password-recovery/password-recovery.module';
import { VerificationController } from 'src/modules/auth/verification/verification.controller';
import { VerificationService } from 'src/modules/auth/verification/verification.service';
import { CommentModule } from 'src/modules/comment/comment.module';

import { MatchModule } from 'src/modules/cs2/match/match.module';
import { GCModule } from 'src/modules/cs2/steam-information/gc.module';

import { MailModule } from 'src/modules/libs/mail/mail.module';
import { ReportUserModule } from 'src/modules/report_user/report-user.module';
import { SocialLinksModule } from 'src/modules/social_links/social-links.module';
import { SocialLinksService } from 'src/modules/social_links/social-links.service';
import { SteamModule } from 'src/modules/steam/steam.module';
import { UploadImageModule } from 'src/modules/upload-image/upload-image.module';
import { UserController } from 'src/modules/user/user.controller';
import { UserService } from 'src/modules/user/user.service';
import { PrismaModule } from 'src/prisma/prisma.module';

import { ProtectedController } from 'src/protected.controller';
import { IS_DEV_ENV } from 'src/shared/utils/is-dev';

@Module({
  imports: [
    ConfigModule.forRoot({ ignoreEnvFile: !IS_DEV_ENV, isGlobal: true }),
    JwtModule.register({
      global: true,
    }),
    PrismaModule,
    MailModule,
    SteamModule,
    CommentModule,
    ReportUserModule,
    SocialLinksModule,
    AuthModule,
    UploadImageModule,
    GCModule,
    PasswordRecoveryModule,
    //MatchModule,
  ],
  controllers: [UserController, ProtectedController, VerificationController],
  providers: [UserService, SocialLinksService, VerificationService],
})
export class CoreModule {}
