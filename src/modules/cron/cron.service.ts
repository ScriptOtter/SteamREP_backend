import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DownloadDemoService } from '../cs2/download-demo/download-demo.service';
import { SteamService } from '../steam/steam.service';
import { SteamPrismaService } from '../steam/steam-prisma.service';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class CronService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly downloadDemo: DownloadDemoService,
    private readonly steamPrismaService: SteamPrismaService,
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

  async updateSteamProfile() {
    const users = await this.prismaService.steamUser.findMany({
      where: {
        OR: [{ avatar: null }],
      },
    });

    if (users.toString() == '') {
      this.logger.warn('Nothing players');
      return;
    }

    for (let index = 0; index < users.length; index++) {
      const user = users[index];

      await this.delay(3000);
      this.logger.log(`Updating profile ${user.personaName} (${user.id})`);

      await this.steamPrismaService.updateClearSteamAccount(users[index].id);
    }
    // Функция для создания задержки
  }

  async vacChecker() {
    interface IUser {
      SteamId: string;
      CommunityBanned: boolean;
      VACBanned: boolean;
      NumberOfVACBans: number;
      DaysSinceLastBan: number;
      NumberOfGameBans: number;
      EconomyBan: string;
    }
    interface IResponse {
      players: IUser[];
    }
    const users = await this.prismaService.steamUserBans.findMany({
      where: {
        OR: [{ vacBanned: false }],
      },
    });
    let players: string[] = [];
    for (let index = 0; index < users.length; index++) {
      players.push(users[index].id);
    }
    const res: AxiosResponse<IResponse> =
      await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=B0C642A55BA751013BA4CE32AAF8D905&steamids=${players}
`);
    let VACBansToday: number = 0;
    for (const user of res.data.players) {
      if (user.VACBanned) VACBansToday = +1;
      await this.prismaService.steamUserBans.update({
        where: { id: user.SteamId },
        data: {
          communityBanned: user.CommunityBanned,
          economyBan: user.EconomyBan,
          daysSinceLastBan: user.DaysSinceLastBan,
          gameBans: user.NumberOfGameBans,
          vacBans: user.NumberOfVACBans,
          vacBanned: user.VACBanned,
        },
      });
    }
    await this.prismaService.vac.create({ data: { number: VACBansToday } });
  }
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
