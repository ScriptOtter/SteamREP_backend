import { Module } from '@nestjs/common';
import { ContentReportsService } from './content-reports.service';
import { ContentReportsController } from './content-reports.controller';
import { TokenService } from '../auth/tokens/tokens.service';

@Module({
  controllers: [ContentReportsController],
  providers: [ContentReportsService, TokenService],
})
export class ContentReportsModule {}
