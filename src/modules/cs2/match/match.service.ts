import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { STEAM_API } from 'src/modules/steam/steam-api';
import { PrismaService } from 'src/prisma/prisma.service';
import { GCService } from '../steam-information/gc.service';
import { Response } from 'express';

import { DownloadDemoService } from '../download-demo/download-demo.service';

@Injectable()
export class MatchService {
  constructor(private readonly prismaService: PrismaService) {}

  //const matchResult = await this.demoAnalyse.matchScoreboard(filePath);

  //console.log(matchResult);
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
