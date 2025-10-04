import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DownloadDemoService } from '../cs2/download-demo/download-demo.service';

@Injectable()
export class CronService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly downloadDemo: DownloadDemoService,
  ) {}
  private readonly logger = new Logger('🚶‍♂️  Tracking Players 🚶‍♂️  ');
  async clearPrisma() {
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);
    const TwoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);
    await this.prismaService.user.deleteMany({
      where: { isEmailVerified: false, createdAt: { lt: fifteenMinutesAgo } },
    });
    await this.prismaService.token.deleteMany({
      where: { createdAt: { lt: fifteenMinutesAgo } },
    });
    await this.prismaService.stackDownloadingMatches.deleteMany({
      where: { createdAt: { lt: TwoMinutesAgo } },
    });
  }

  async downloadCS2Demos() {
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);
    const users = await this.prismaService.steamUser.findMany({
      where: {
        sharedCode: { not: null },
        gameAuthenticationCode: { not: null },
        OR: [
          { sharedCodeError: { lt: fifteenMinutesAgo } },
          { sharedCodeError: null },
        ],
      },
    });

    // const cs2users = users.filter((user) => {
    //   return user.sharedCode && user.gameAuthenticationCode;
    // });
    if (users.toString() == '') {
      this.logger.warn('Waiting for new matches');
      return;
    }

    for (let index = 0; index < users.length; index++) {
      const user = users[index];

      await this.delay(3000);
      this.logger.log(
        `Searching new match for ${user.personaName} (${user.id})`,
      );
      this.downloadDemo.searchLatestMatch(user.id);
    }
  }

  // Функция для создания задержки
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
