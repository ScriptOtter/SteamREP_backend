import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { STEAM_API } from 'src/modules/steam/steam-api';
import { PrismaService } from 'src/prisma/prisma.service';
import { GCService } from '../steam-information/gc.service';
import { Response } from 'express';
import { DemoAnalyseService } from '../demo-analyse/demo-analyse.service';
import { DownloadDemoService } from '../download-demo/download-demo.service';

@Injectable()
export class MatchService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly gc: GCService,
    private readonly demoAnalyse: DemoAnalyseService,
    private readonly downloadDemoService: DownloadDemoService,
  ) {}

  async isCurrentMatchExists(sharedCode: string) {
    return Boolean(
      await this.prismaService.match.findFirst({ where: { sharedCode } }),
    );
  }

  async getHistoryMatches(steamid: string, res: Response) {
    let matchResults = [];
    let matchData;
    let sharedCode;

    const lastMatch = await this.prismaService.match.findMany({
      where: { participants: { some: { id: steamid } } },
      orderBy: { createdAt: 'desc' },
    });

    if (lastMatch[0]) {
      sharedCode = lastMatch[0].sharedCode;
    } else {
      sharedCode = (
        await this.prismaService.steamUser.findUnique({
          where: { id: steamid },
        })
      )?.sharedCode;
    }
    if (sharedCode) {
      matchData = await this.gc.getMatchInfoFromSharedCode(sharedCode, res);
    }
    const matchExists = await this.isCurrentMatchExists(sharedCode);
    if (matchExists) {
      const steamidkey = (
        await this.prismaService.steamUser.findUnique({
          where: { id: steamid },
        })
      )?.gameAuthenticationCode;
      let res = await axios.get(
        STEAM_API.GetNextMatchSharingCode +
          `?key=${process.env.STEAM_API}&steamid=${steamid}&steamidkey=${steamidkey}&knowncode=${sharedCode}`,
      );
      sharedCode = res?.data?.result?.nextcode;
      console.log(steamid, ' - ', sharedCode, ' - ', steamidkey);
    }
    const rounds = matchData?.roundstatsall;
    const mapUrl = rounds?.length ? rounds[rounds.length - 1]?.map : null;
    console.log(mapUrl);

    const filePath = await this.downloadDemoService.downloadDemo(
      mapUrl,
      sharedCode,
    );
    const matchResult = await this.demoAnalyse.matchScoreboard(filePath);

    console.log(matchResult);
    //const match = await this.prismaService.match.create({data:{}})
    //return matchResult;
    // if (matchData) {
    //   while (sharedCode != 'n/a') {
    //     let data: Match = this.getMatchInfoFromShareCode(sharedCode);
    //     participants SteamUser[]
    //     playersStatistic PlayerStatistics[]
    //     matchId String @unique
    //     score String
    //     date DateTime
    //     sharedCode String @unique @map("shared_code")
    //     replay String
    //     result Boolean @default(true)
    //     duration String}});
    //     await this.prismaService.m
    //   }
    // }
  }
}
