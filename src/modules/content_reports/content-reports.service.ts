import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenService } from '../auth/tokens/tokens.service';
import { ContentReportType } from 'generated/prisma';
import { CreateReportDTO } from './dto/createReport.dto';

@Injectable()
export class ContentReportsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly tokenService: TokenService,
  ) {}

  public async createReport(req: Request, dto: CreateReportDTO) {
    const userId = await this.tokenService.getIdFromToken(req);
    if (!userId) throw new UnauthorizedException('Log in first');
    console.log(userId, dto);
    if (dto.type === 'COMMENT') {
      try {
        await this.prismaService.contentReports.create({
          data: {
            userId,
            type: ContentReportType.COMMENT,
            userComment: dto.userComment,
            commentId: dto.commentId,
          },
        });
        return true;
      } catch (e) {
        throw new BadRequestException('Failed to send report');
      }
    }

    if (dto.type === 'REPORT') {
      try {
        await this.prismaService.contentReports.create({
          data: {
            userId,
            type: ContentReportType.REPORT,
            userComment: dto.userComment,
            reportId: dto.reportId,
          },
        });
        console.log('CONTENT REPORT CREATER', dto.reportId);
        await this.prismaService.verdict.create({
          data: {
            verdicts: [dto.userComment],
            reportId: dto.reportId!,
            userId,
          },
        });
        console.log('REPORT CREATER', dto.reportId);
        return true;
      } catch (e) {
        console.log(e);
        throw new BadRequestException('Failed to send report');
      }
    }
    throw new BadRequestException('Failed to send report');
  }
}
