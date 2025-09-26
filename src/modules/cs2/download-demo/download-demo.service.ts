import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import axios from 'axios';
import * as https from 'https';
import { STEAM_API } from 'src/modules/steam/steam-api';
import { PrismaService } from 'src/prisma/prisma.service';
import { PassThrough } from 'stream';
import bz2 from 'unbzip2-stream';
import { GCService } from '../steam-information/gc.service';

@Injectable()
export class DownloadDemoService {
  private s3: S3;
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

  public async downloadDemo(url: string, name: string): Promise<void> {
    const agent = new https.Agent({ minVersion: 'TLSv1.3' });
    const demoName = `${name}.dem`;
    try {
      const response = await axios.get(url, {
        responseType: 'stream',
        httpsAgent: agent,
      });
      await this.prismaService.downloadingMatches.create({
        data: { id: demoName },
      });

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
        .then((e) => {
          console.log(e, '\n Downloading ended!');
        });
    } catch (e) {}
  }

  async isCurrentMatchExists(sharedCode: string) {
    return Boolean(
      await this.prismaService.match.findFirst({ where: { sharedCode } }),
    );
  }

  async searchLatestMatch(steamid: string) {
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
      const match = await this.prismaService.downloadingMatches.findUnique({
        where: { id: `${sharedCode}.dem` },
      });
      if (match) {
        console.log(`${sharedCode}.dem for ${steamid} waiting analyze`);
        return;
      }
      matchData = await this.gc.getMatchInfoFromSharedCode(sharedCode);
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
      console.log(res);
      sharedCode = res?.data?.result?.nextcode;
    }
    const rounds = matchData?.roundstatsall;
    const mapUrl = rounds?.length ? rounds[rounds.length - 1]?.map : null;
    console.log(mapUrl);
    if (mapUrl) await this.downloadDemo(mapUrl, sharedCode);
  }
}
