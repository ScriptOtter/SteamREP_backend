import { Module } from '@nestjs/common';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SocialLinksController } from './social-links.controller';

@Module({
  imports: [PrismaModule],
  controllers: [SocialLinksController],
  providers: [TokenService],
})
export class SocialLinksModule {}
