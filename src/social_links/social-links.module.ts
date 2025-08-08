import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { TokenService } from 'src/auth/tokens/tokens.service';
import { SocialLinksController } from './social-links.controller';
import { SocialLinksService } from './social-links.service';

@Module({
  imports: [PrismaModule],
  controllers: [SocialLinksController],
  providers: [SocialLinksService, TokenService],
})
export class SocialLinksModule {}
