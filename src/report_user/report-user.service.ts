import { BadRequestException, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReportDto } from './dto/createReport.dto';
import { SteamService } from 'src/steam/steam.service';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';
import { sendVerdictDto } from './dto/sendVerdict.dto';

@Injectable()
export class ReportUserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tokenService: TokenService,
    private readonly steamService: SteamService,
  ) {}

  async createReport(dto: CreateReportDto, req: Request): Promise<any> {
    const userId = await this.tokenService.getIdFromToken(req);
    const recipientId = await this.steamService.getSteam64Id(dto.recipientId);
    console.log(recipientId);
    try {
      const report = await this.prisma.reportUser.create({
        data: {
          authorId: userId,
          youtubeLink: dto.youtubeLink,
          demoLink: dto.demoLink,
          recipientId: recipientId,
          reasonsReport: dto.reasonsReport,
          comment: dto.comment,
        },
      });
      if (!report) {
        throw new BadRequestException('Try again later!');
      }
      const verdict = await this.prisma.verdict.create({
        data: {
          userId: report.authorId,
          reportId: report.id,
          verdicts: report.reasonsReport,
        },
      });
      if (!verdict) {
        await this.prisma.reportUser.delete({ where: { id: report.id } });
        throw new BadRequestException('Try again later!');
      }
      const updatedReport = await this.prisma.reportUser.update({
        where: { id: report.id },
        data: { verdicts: { connect: { id: verdict.id } } },
      });
      if (!updatedReport) {
        await this.prisma.reportUser.delete({ where: { id: report.id } });
        await this.prisma.verdict.delete({ where: { id: verdict.id } });
        throw new BadRequestException('Try again later!');
      }
      console.log(report);
      return updatedReport;
    } catch (e) {
      console.log(e);
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.meta?.target?.toString() === 'youtube_link') {
          throw new BadRequestException(
            'The Youtube Link has already been used!',
          );
        }
        if (e.meta?.target?.toString() === 'authorId,recipientId') {
          throw new BadRequestException(
            'A complaint about this user has already been sent!',
          );
        }
      }
      throw new BadRequestException('Try again later!');
    }
  }

  async getAllReportsWithoutMe(req: Request): Promise<any> {
    const userId = await this.tokenService.getIdFromToken(req);

    const reports = await this.prisma.reportUser.findMany({
      where: { NOT: { authorId: userId } },
    });

    if (!reports) {
      throw new BadRequestException('Reload the page!');
    }
    return reports;
  }

  async getMyVerdicts(req: Request): Promise<any> {
    const userId = await this.tokenService.getIdFromToken(req);

    const verdicts = await this.prisma.verdict.findMany({
      where: { userId: userId },
    });
    if (!verdicts) {
      throw new BadRequestException('Try again later!');
    }
    return verdicts;
  }

  async getSelectedReport(param: string): Promise<any> {
    const id = Number(param);
    if (!id) {
      throw new BadRequestException('Wrong URL!');
    }
    const report = await this.prisma.reportUser.findUnique({
      where: { id: id },
    });
    if (!report) {
      throw new BadRequestException('Reload the page!');
    }
    return report;
  }

  async sendVerdict(
    param: string,
    req: Request,
    dto: sendVerdictDto,
  ): Promise<any> {
    const userId = await this.tokenService.getIdFromToken(req);
    const reportId = Number(param);
    if (!reportId) {
      throw new BadRequestException('Wrong URL!');
    }
    console.log(dto.verdict);
    if (!dto.verdict.toString()) {
      throw new BadRequestException('Verdicts is null!');
    }
    const verdictUser = await this.prisma.verdict.create({
      data: { userId: userId, reportId: reportId, verdicts: dto.verdict },
    });
    if (!verdictUser) {
      throw new BadRequestException('Try again!');
    }
    return verdictUser;
  }
}
