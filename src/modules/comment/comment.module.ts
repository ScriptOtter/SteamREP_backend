import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { SteamService } from '../steam/steam.service';
import { SteamOAuth } from '../steam/steam.oauth';
import { TokenService } from '../auth/tokens/tokens.service';
import { TokenModule } from '../auth/tokens/token.module';

@Module({
  imports: [TokenModule],
  controllers: [CommentController],
  providers: [CommentService, SteamService, SteamOAuth],
})
export class CommentModule {}
