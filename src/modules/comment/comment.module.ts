import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { SteamService } from '../steam/steam.service';
import { SteamOAuth } from '../steam/steam.oauth';
import { TokenService } from '../auth/tokens/tokens.service';
import { TokenModule } from '../auth/tokens/token.module';
import { UploadModule } from '../upload/upload.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { NotificationsService } from '../notifications/notifications.service';

@Module({
  imports: [TokenModule, UploadModule],
  controllers: [CommentController],
  providers: [CommentService, SteamService, SteamOAuth, NotificationsService],
})
export class CommentModule {}
