import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DownloadDemoService } from '../cs2/download-demo/download-demo.service';

@Injectable()
export class CronService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly downloadDemo: DownloadDemoService,
  ) {}

  async clearPrisma() {
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);
    await this.prismaService.user.deleteMany({
      where: { isEmailVerified: false, createdAt: { lt: fifteenMinutesAgo } },
    });
    await this.prismaService.token.deleteMany({
      where: { createdAt: { lt: fifteenMinutesAgo } },
    });
  }

  async downloadCS2Demos() {
    const users = await this.prismaService.steamUser.findMany();
    const cs2users = users.filter((user) => {
      return user.sharedCode && user.gameAuthenticationCode;
    });
    if (cs2users)
      cs2users.forEach((user) => {
        console.log(`Searching new cs2 .demo for ${user.id}`);
        this.downloadDemo.searchLatestMatch(user.id);
      });
  }
}
