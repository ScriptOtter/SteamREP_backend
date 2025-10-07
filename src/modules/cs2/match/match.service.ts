import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request, Response } from 'express';
import { TokenService } from 'src/modules/auth/tokens/tokens.service';

@Injectable()
export class MatchService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly tokenService: TokenService,
  ) {}

  public async getMatchesStatisticBySteamId(steamid: string, res: Response) {
    const matches = await this.prismaService.match.findMany({
      where: { playersStatistic: { some: { steamid } } },
      select: {
        type: true,
        date: true,
        id: true,
        map: true,
        score: true,
        playersStatistic: {
          where: { steamid },
          select: {
            ace_rounds_total: true,
            assists_total: true,
            damage_total: true,
            deaths_total: true,
            headshot_kills_total: true,
            id: true,
            isSuspicious: true,
            k3_rounds_total: true,
            k4_rounds_total: true,
            kills_total: true,
            mvps: true,
            rank: true,
            result: true,
            score: true,
            steamid: true,
            team: true,
            team_score_first_half: true,
            team_score_second_half: true,
          },
        },
      },
      orderBy: { dateUnix: 'desc' },
    });
    res.json(matches);
  }

  public async getMatchStatistic(id: string, res: Response) {
    const match = await this.prismaService.match.findUnique({
      where: { id },
      include: { playersStatistic: true, participants: true },
    });
    res.json(match);
  }
}
