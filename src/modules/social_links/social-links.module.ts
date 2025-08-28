import { Module } from '@nestjs/common';
import { SocialLinksController } from './social-links.controller';
import { SocialLinksService } from './social-links.service';
import { TokenService } from '../auth/tokens/tokens.service';

@Module({
  imports: [],
  controllers: [SocialLinksController],
  providers: [SocialLinksService, TokenService],
})
export class SocialLinksModule {}
