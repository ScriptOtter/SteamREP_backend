import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import axios from 'axios';
import * as https from 'https';
import { STEAM_API } from 'src/modules/steam/steam-api';
import { PrismaService } from 'src/prisma/prisma.service';
import { PassThrough } from 'stream';
import bz2 from 'unbzip2-stream';
import { GCService } from '../steam-information/gc.service';
import { formatUnixTime } from 'src/shared/utils/formatUnixTime';
import { formatTime } from 'src/shared/utils/formatTime';

export interface IDemo {
  steamid: string;
  sharedCode: string;
  matchid: string;
  matchtime: number;
  url: string;
  match_duration: number;
  match_result: number;
  score: string;
}

@Injectable()
export class DownloadDemoService {
  private s3: S3;
  private readonly logger = new Logger('Download Demo Service');
  public constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
    private readonly gc: GCService,
  ) {
    this.s3 = new S3({
      accessKeyId: this.configService.getOrThrow<string>('S3_ACCESS_KEY'),
      secretAccessKey: this.configService.getOrThrow<string>('S3_SECRET_KEY'),
      endpoint: this.configService.getOrThrow<string>('S3_ENDPOINT'),
      s3ForcePathStyle: true,
    });
  }

  public async downloadDemo(demo: IDemo): Promise<void> {
    const agent = new https.Agent({ minVersion: 'TLSv1.3' });
    const demoName = `${demo.sharedCode}.dem`;
    this.logger.log(`Downloading demo for ${demo.steamid}...`);
    try {
      await this.prismaService.stackDownloadingMatches.create({
        data: { id: demo.sharedCode },
      });
      const checkResurs = await axios.get(demo.url, {
        method: 'HEAD',
      });
      if (checkResurs.status !== 200) return;

      const response = await axios.get(demo.url, {
        responseType: 'stream',
        httpsAgent: agent,
      });

      if (!response) {
        this.logger.log(`Failed to download demo ${demo.sharedCode}`);
      }

      const bunzip = bz2();
      const passThrough = new PassThrough();
      const params: S3.PutObjectRequest = {
        Bucket: this.configService.getOrThrow<string>('S3_DEMOS_BUCKET_NAME'),
        Key: demoName,
        Body: response.data.pipe(bunzip).pipe(passThrough),
        ContentType: 'dem',
      };

      await this.s3
        .upload(params)
        .promise()
        .then(async () => {
          const match = await this.prismaService.matchForAnalysis.create({
            data: {
              sharedCode: demo.sharedCode,
              date: formatUnixTime(demo.matchtime),
              dateUnix: demo.matchtime,
              demoUrl: demo.url,
              duration: formatTime(demo.match_duration),
              matchId: demo.matchid,
              score: demo.score,
              playerId: demo.steamid,
            },
          });
          await this.prismaService.stackDownloadingMatches.delete({
            where: { id: demo.sharedCode },
          });
          this.logger.log(
            `${match.sharedCode}.dem successfully loaded into the system!`,
          );
        })
        .catch((err) => {
          err.code == 'TimeoutError';
          console.log(err);
          return;
        });
    } catch (e) {
      this.getNewSharedCode(demo.steamid, demo.sharedCode);
      await this.prismaService.stackDownloadingMatches.delete({
        where: { id: demo.sharedCode },
      });
      this.logger.error(
        `Failed loaded demo into the system! Searching new match for ${demo.steamid}`,
      );
    }
  }

  async isCurrentMatchExists(sharedCode: string) {
    return Boolean(
      await this.prismaService.match.findFirst({ where: { sharedCode } }),
    );
  }

  private async getNewSharedCode(steamid: string, sharedCode: string) {
    try {
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
      if (sharedCode === 'n/a') {
        await this.prismaService.steamUser.update({
          where: { id: steamid },
          data: { sharedCodeError: new Date() },
        });
        this.logger.error(
          `For player ${steamid}, tracking was stopped for 15 minutes.`,
        );
      } else {
        this.logger.log(
          `A new match has been found for player ${steamid}: ${sharedCode}`,
        );
        await this.prismaService.steamUser.update({
          where: { id: steamid },
          data: { sharedCode },
        });
      }
    } catch (e) {
      if (e.status === 412)
        console.log(
          'User ',
          e.config.url.split('?')[1].split('&')[1].split('=')[1],
          'баг скачивания 412',
        );
    }
  }
  async searchLatestMatch(steamid: string) {
    let sharedCode = (
      await this.prismaService.steamUser.findUnique({
        where: { id: steamid },
      })
    )?.sharedCode;

    if (!sharedCode) return;
    const downloadingStack =
      await this.prismaService.stackDownloadingMatches.findUnique({
        where: { id: sharedCode },
      });
    if (downloadingStack) {
      this.logger.log(`${sharedCode}.dem downloading now...`);
      this.getNewSharedCode(steamid, sharedCode);
      return;
    }

    const match = await this.prismaService.matchForAnalysis.findUnique({
      where: { sharedCode: sharedCode },
    });
    if (match) {
      this.logger.log(`${sharedCode}.dem waiting analyze.`);
      this.getNewSharedCode(steamid, sharedCode);
      return;
    }

    const matchExists = await this.isCurrentMatchExists(sharedCode);
    if (matchExists) {
      this.logger.warn(`${sharedCode}.dem already contained in DB!`);
      this.getNewSharedCode(steamid, sharedCode);
      return;
    }

    const matchData = await this.gc.getMatchInfoFromSharedCode(sharedCode);

    const rounds = matchData?.roundstatsall;
    const matchid: string = matchData?.matchid;
    const matchtime: number = matchData?.matchtime;
    const url: string = rounds?.length ? rounds[rounds.length - 1]?.map : null;

    const score: string = rounds?.length
      ? `${rounds[rounds.length - 1]?.team_scores[0]}:${rounds[rounds.length - 1]?.team_scores[1]}`
      : 'null';
    const match_duration: number = rounds?.length
      ? rounds[rounds.length - 1]?.match_duration
      : null;
    const match_result: number = rounds?.length
      ? rounds[rounds.length - 1]?.match_result
      : null;

    if (url)
      await this.downloadDemo({
        steamid,
        sharedCode,
        matchid,
        matchtime,
        url,
        match_duration,
        match_result,
        score,
      });
  }
}
