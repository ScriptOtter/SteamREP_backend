import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/modules/auth/auth.module';
import { PasswordRecoveryModule } from 'src/modules/auth/password-recovery/password-recovery.module';
import { VerificationModule } from 'src/modules/auth/verification/verification.module';
import { CommentModule } from 'src/modules/comment/comment.module';
import { MailModule } from 'src/modules/libs/mail/mail.module';
import { NotificationsModule } from 'src/modules/notifications/notifications.module';
import { ReportUserModule } from 'src/modules/report_user/report-user.module';
import { SocialLinksModule } from 'src/modules/social_links/social-links.module';
import { SocialLinksService } from 'src/modules/social_links/social-links.service';
import { SteamModule } from 'src/modules/steam/steam.module';
import { TrackingUsersModule } from 'src/modules/tracking-users/tracking-users.module';
import { UserController } from 'src/modules/user/user.controller';
import { UserService } from 'src/modules/user/user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ProtectedController } from 'src/protected.controller';
import { IS_DEV_ENV } from 'src/shared/utils/is-dev';
import { CronModule } from 'src/modules/cron/cron.module';
import { DownloadDemoModule } from 'src/modules/cs2/download-demo/download-demo.module';
import { GeneralPlayerStatisticsModule } from 'src/modules/cs2/general-player-statistics/general-player-statistics.module';
import { MatchModule } from 'src/modules/cs2/match/match.module';

@Module({
  imports: [
    ConfigModule.forRoot({ ignoreEnvFile: !IS_DEV_ENV, isGlobal: true }),
    ScheduleModule.forRoot(),
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
    NotificationsModule,
    VerificationModule,
    TrackingUsersModule,
    CronModule,
    DownloadDemoModule,
    GeneralPlayerStatisticsModule,
    PasswordRecoveryModule,
    MatchModule,
  ],
  controllers: [UserController, ProtectedController],
  providers: [UserService, SocialLinksService],
})
export class CoreModule {}
