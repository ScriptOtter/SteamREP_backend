import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ReportUserService } from './report-user.service';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';
import { CreateReportDto } from './dto/createReport.dto';
import { Request, Response } from 'express';
import { sendVerdictDto } from './dto/sendVerdict.dto';

@Controller('')
export class ReportUserController {
  constructor(private readonly reportUserService: ReportUserService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Post('report')
  createReport(@Body() dto: CreateReportDto, @Req() req: Request) {
    return this.reportUserService.createReport(dto, req);
  }

  @HttpCode(HttpStatus.OK)
  @Get('getReports')
  getReportsWithoutMe(@Req() req: Request) {
    return this.reportUserService.getAllReportsWithoutMe(req);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Get('getMyVerdicts')
  getMyVerdicts(@Req() req: Request) {
    return this.reportUserService.getMyVerdicts(req);
  }

  @HttpCode(HttpStatus.OK)
  @Get('getReport/:id')
  getSelectedReport(@Param('id') param: string) {
    return this.reportUserService.getSelectedReport(param);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Post('sendVerdict/:id')
  sendVerdict(
    @Param('id') param: string,
    @Req() req: Request,
    @Body() dto: sendVerdictDto,
  ) {
    return this.reportUserService.sendVerdict(param, req, dto);
  }
}
