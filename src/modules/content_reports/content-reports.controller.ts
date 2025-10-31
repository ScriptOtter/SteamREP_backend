import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ContentReportsService } from './content-reports.service';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';
import { SteamVerificationGuard } from 'src/shared/Guards/steamVerification.guard';
import { Request } from 'express';
import { CreateReportDTO } from './dto/createReport.dto';

@Controller('content-reports')
export class ContentReportsController {
  constructor(private readonly contentReportsService: ContentReportsService) {}

  @Post('create')
  @UseGuards(JwtAccessGuard)
  @UseGuards(SteamVerificationGuard)
  public async createReport(@Req() req: Request, @Body() dto: CreateReportDTO) {
    return this.contentReportsService.createReport(req, dto);
  }
}
