import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReportDto } from './dto/createReport.dto';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';
import { sendVerdictDto } from './dto/sendVerdict.dto';
import { TokenService } from '../auth/tokens/tokens.service';
import { SteamService } from '../steam/steam.service';
import { GCService } from '../cs2/steam-information/gc.service';

@Injectable()
export class ReportUserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tokenService: TokenService,
    private readonly steamService: SteamService,
    private readonly gc: GCService,
  ) {}

  async createReport(dto: CreateReportDto, req: Request): Promise<any> {
    const userId = await this.tokenService.getIdFromToken(req);
    const recipientId = await this.steamService.getSteam64Id(dto.recipientId);
    if (dto.demoLink?.trim() === '' && dto.youtubeLink?.trim() === '')
      throw new BadRequestException('Please provide a link to YouTube or demo');
    const user = await this.prisma.steamUser.findUnique({
      where: { userId },
    });
    if (!user)
      throw new BadRequestException(
        'Steam account is not connected to the site',
      );
    const isActiveGC = await this.gc.getAccountInformation(user.id);
    if (isActiveGC) {
      throw new BadGatewayException(
        'Unable to retrieve match details. Please contact support',
      );
    }
    if (
      dto.demoLink &&
      !dto.demoLink?.startsWith('steam://rungame/730/') &&
      (await this.gc.getMatchInfoFromSharedCode(dto.demoLink.split('%20')[1]))
    ) {
      throw new BadRequestException('Demo link not valid!');
    }

    if (
      !dto.youtubeLink.startsWith('https://www.youtube.com/watch?v=') &&
      !dto.youtubeLink.startsWith('https://youtu.be/')
    )
      throw new BadRequestException('Youtube link not valid!');
    const steam = await this.prisma.steamUser.findFirst({ where: { userId } });
    if (!steam) throw new UnauthorizedException('Please log in');
    if (steam.id === recipientId)
      throw new BadRequestException(
        'It is not possible to send a report on yourself',
      );

    const match = await this.prisma.reportUser.findFirst({
      where: {
        authorId: userId,
        recipientId,
        demoLink: dto.demoLink,
        youtubeLink: dto.youtubeLink,
      },
    });
    if (match) {
      throw new BadRequestException('You have already sent a report earlier');
    }
    try {
      const report = await this.prisma.reportUser.create({
        data: {
          authorId: userId,
          youtubeLink: dto.youtubeLink,
          demoLink: dto.demoLink,
          recipientId: recipientId,

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
          verdicts: dto.reasonsReport,
          comment: dto.comment,
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

  async getDemosWithoutVerdicts(req: Request): Promise<any> {
    let userId;

    if (req.cookies.SteamREP_refreshToken) {
      userId = await this.tokenService.getIdFromToken(req);
    } else userId = '';

    const reports = await this.prisma.reportUser.findMany({
      where: { verdicts: { none: { userId } } },
      include: {
        verdicts: { select: { verdicts: true } },
        author: {
          select: {
            steamUser: {
              select: {
                id: true,
                personaName: true,
                avatar: true,
                profileUrl: true,
              },
            },
          },
        },
        recipient: {
          select: {
            id: true,
            personaName: true,
            avatar: true,
            profileUrl: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!reports) {
      throw new BadRequestException('Reload the page!');
    }
    return reports;
  }

  async getMyVerdicts(req: Request): Promise<any> {
    const userId = await this.tokenService.getIdFromToken(req);

    const reports = await this.prisma.reportUser.findMany({
      where: {
        verdicts: { some: { userId: userId } },
        author: { NOT: { id: userId } },
      },
      include: {
        verdicts: {
          where: { userId: userId },
          select: { verdicts: true, comment: true, createdAt: true },
        },
        author: {
          select: {
            steamUser: {
              select: {
                id: true,
                personaName: true,
                avatar: true,
                profileUrl: true,
              },
            },
          },
        },
        recipient: {
          select: {
            id: true,
            personaName: true,
            avatar: true,
            profileUrl: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!reports) {
      throw new BadRequestException('Reload the page!');
    }

    return reports;
  }

  async getMyReports(req: Request): Promise<any> {
    const userId = await this.tokenService.getIdFromToken(req);

    const reports = await this.prisma.reportUser.findMany({
      where: { authorId: userId },
      include: {
        verdicts: {
          where: { userId: userId },
          select: { verdicts: true, comment: true, createdAt: true },
        },
        author: {
          select: {
            steamUser: {
              select: {
                id: true,
                personaName: true,
                avatar: true,
                profileUrl: true,
              },
            },
          },
        },
        recipient: {
          select: {
            id: true,
            personaName: true,
            avatar: true,
            profileUrl: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!reports) {
      throw new BadRequestException('Reload the page!');
    }
    return reports;
  }

  async getSelectedReport(param: string): Promise<any> {
    if (!param) {
      throw new BadRequestException('Wrong URL!');
    }
    const report = await this.prisma.reportUser.findUnique({
      where: { id: param },
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

    if (!param) {
      throw new BadRequestException('Wrong URL!');
    }

    if (dto.verdict.toString() === '') {
      throw new BadRequestException('Verdicts is null!');
    }
    const verdict = await this.prisma.verdict.findFirst({
      where: { userId, id: param },
    });

    if (!verdict) {
      const verdictUser = await this.prisma.verdict.create({
        data: {
          userId: userId,
          reportId: param,
          verdicts: dto.verdict,
          comment: dto.comment,
        },
      });
      if (!verdictUser) {
        throw new BadRequestException('Try again!');
      }

      return verdictUser;
    }
  }
}
