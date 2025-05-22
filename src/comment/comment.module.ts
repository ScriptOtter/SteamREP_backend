import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SteamService } from 'src/steam/steam.service';
import { SteamOAuth } from 'src/steam/steam.oauth';
import { TokenService } from 'src/auth/tokens/tokens.service';

@Module({
  imports: [PrismaModule],
  controllers: [CommentController],
  providers: [CommentService, SteamService, SteamOAuth, TokenService],
})
export class CommentModule {}
