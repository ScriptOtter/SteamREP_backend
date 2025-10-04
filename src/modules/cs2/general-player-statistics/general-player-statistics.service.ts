import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { SteamPrismaService } from 'src/modules/steam/steam-prisma.service';

import { PrismaService } from 'src/prisma/prisma.service';
import { LeetifyProfile } from 'src/shared/utils/interfaces/leetify.interface';

@Injectable()
export class GeneralPlayerStatisticsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly steamPrismaService: SteamPrismaService,
  ) {}

  private async getInitialRanks(steamid: string): Promise<void> {
    console.log('getInitialRanks');
    try {
      let genStats = await this.prismaService.generalPlayerStatistics.findFirst(
        {
          where: { userId: steamid },
        },
      );
      if (!genStats) {
        genStats = await this.prismaService.generalPlayerStatistics.create({
          data: { steam: { connect: { id: steamid } } },
        });
      }

      const leetify: AxiosResponse<LeetifyProfile> = await axios.get(
        `https://api-public.cs-prod.leetify.com/v3/profile?steam64_id=${steamid}`,
      );

      for (const map of leetify.data.ranks.competitive) {
        const mapRank = await this.prismaService.mapRanks.findFirst({
          where: { name: map.map_name, rank: map.rank, playerId: genStats.id },
        });

        if (!mapRank) {
          await this.prismaService.mapRanks.create({
            data: {
              name: map.map_name,
              rank: map.rank,
              generalPlayerStatistics: { connect: { userId: steamid } },
            },
          });
        }
      }
      const { winrate, total_matches, first_match_date } = leetify.data;
      const { premier, faceit, faceit_elo, wingman } = leetify.data.ranks;
      const oldData =
        await this.prismaService.generalPlayerStatistics.findFirst({
          where: { userId: steamid },
        });
      if (oldData) {
        await this.prismaService.generalPlayerStatistics.update({
          where: { userId: steamid },
          data: {
            premier,
            faceit,
            faceit_elo,
            wingman,
            inGameSinse: first_match_date,
          },
        });
      }

      const { platform, banned_since } = leetify.data.bans[0];
      if (platform === 'matchmaking') {
        await this.prismaService.steamUserBans.update({
          where: { id: steamid },
          data: { csBan: true, cs_banned_since: banned_since },
        });
      }

      await this.prismaService.steamUser.update({
        where: { id: steamid },
        data: { isGettedGeneralPlayerStatistics: true },
      });
      console.log(`CS2 data - ${steamid} updated!`);
    } catch (e) {
      console.log('Leetify user not found');
      return;
    }
  }
  private async updateCS2StatsFromLeetify(steamid: string) {
    try {
      const leetify: AxiosResponse<LeetifyProfile> = await axios.get(
        `https://api-public.cs-prod.leetify.com/v3/profile?steam64_id=${steamid}`,
      );
      for (const map of leetify.data.ranks.competitive) {
        await this.prismaService.mapRanks.updateMany({
          where: { playerId: steamid },
          data: { name: map.map_name, rank: map.rank },
        });
      }
      const { first_match_date } = leetify.data;
      const { premier, faceit, faceit_elo, wingman } = leetify.data.ranks;
      const oldData =
        await this.prismaService.generalPlayerStatistics.findFirst({
          where: { userId: steamid },
        });
      if (oldData) {
        await this.prismaService.generalPlayerStatistics.update({
          where: { userId: steamid },
          data: {
            premier,
            faceit,
            faceit_elo,
            wingman,
            inGameSinse: first_match_date,
          },
        });
      }
      const { platform, banned_since } = leetify.data.bans[0];
      if (platform === 'matchmaking') {
        await this.prismaService.steamUserBans.update({
          where: { id: steamid },
          data: { csBan: true, cs_banned_since: banned_since },
        });
      }
      return true;
    } catch (e) {
      console.log(e);
      return 'Error';
    }
  }

  public async getCS2Stats(steamid: string) {
    try {
      const user = await this.prismaService.steamUser.findUnique({
        where: { id: steamid },
      });
      if (!user) await this.steamPrismaService.createSteamUser(steamid);
      const genStat =
        await this.prismaService.generalPlayerStatistics.findFirst({
          where: { userId: steamid },
        });
      if (
        !genStat?.faceit ||
        !genStat.premier ||
        !genStat.faceit_elo ||
        !genStat.inGameSinse ||
        !genStat.wingman
      )
        await this.getInitialRanks(steamid);
      if (
        genStat &&
        new Date().getTime() - new Date(genStat.updatedAt).getTime() >=
          7 * 24 * 60 * 60 * 1000
      ) {
        await this.updateCS2StatsFromLeetify(steamid);
      }

      const stats = await this.prismaService.generalPlayerStatistics.findFirst({
        where: { userId: steamid },

        select: {
          faceit: true,
          faceit_elo: true,
          premier: true,
          wingman: true,
          wingmanMathes: true,
          wingmanWins: true,
          TotalMatches: true,
          wins: true,
          inGameSinse: true,
          updatedAt: true,
          MapRanks: {
            select: { name: true, rank: true, updatedAt: true },
            orderBy: { rank: 'desc' },
          },
          WeaponStats: {
            select: {
              name: true,
              fire: true,
              hits: {
                select: {
                  hits: true,
                  hitLocation: true,
                  kills: true,
                  totalDamage: true,
                },
              },
            },
          },
          steam: {
            select: {
              steamUserBans: { select: { csBan: true, cs_banned_since: true } },
            },
          },
        },
      });
      if (!stats) return [];
      return stats;
    } catch (e) {
      return e;
    }
  }
}
