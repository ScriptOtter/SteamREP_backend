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
      include: {
        playersStatistic: { where: { steamid } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(matches);
  }

  public async getMatchStatistic(id: string, res: Response) {
    const match = await this.prismaService.match.findUnique({
      where: { id },
      include: { playersStatistic: true },
    });
    res.json(match);
  }
}
