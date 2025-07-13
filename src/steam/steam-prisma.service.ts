import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SteamService } from './steam.service';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { Request } from 'express';
import { UserService } from 'src/user/user.service';
import { SteamOAuth } from './steam.oauth';
import axios from 'axios';
import { ISteamBans } from './dto/steam-bans.dto';
import { tradeItApi } from 'src/api/tradeit';
import { ITradeit } from './dto/steam-tradeit.dto';

@Injectable()
export class SteamPrismaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly steamService: SteamService,
    private readonly tokenSerive: TokenService,
    private readonly userService: UserService,
    private readonly steamOAuth: SteamOAuth,
  ) {}

  formatTimestampToDateString(timestamp: number) {
    const date = new Date(timestamp * 1000);

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return month + ' ' + day + ' ' + year;
  }

  public async findSteamUser(id: string): Promise<Partial<any> | null> {
    try {
      console.log('findSteamUser');
      const steamid = (await this.steamService.getSteamUser(id))[0].steamid;
      const steamUser = await this.prisma.steamUser.findUnique({
        where: { id: steamid },
        include: {
          user: {
            select: { id: true, username: true, avatar: true, role: true },
          },
        },
      });
      if (!steamUser) {
        await this.createSteamUser(steamid);
      } else {
        await this.prisma.steamViewers.update({
          where: { id: steamid },
          data: { viewers: { increment: 1 } },
        });
        console.log('PROFILE UPDATING!');
        const lastUpdatedDate = steamUser.updatedAt; // Получаем дату последнего обновления
        const currentDate = new Date(); // Текущая дата

        // Сравниваем только даты (без учета времени)
        if (lastUpdatedDate.toDateString() !== currentDate.toDateString()) {
          // Если даты разные, значит, наступил новый день
          console.log('PROFILE UPDATED!');
          await this.updateSteamUserFromTradeIt(steamid); // Обновляем профиль
          await this.updateSteamUserFromSteam(steamid);
        }
        console.log('PROFILE NOT UPDATED!');
      }

      return await this.prisma.steamUser.findUnique({
        where: { id: steamid },
        include: {
          user: {
            select: { id: true, username: true, avatar: true, role: true },
          },
          steamUserBans: {},
        },
      });
    } catch (e) {
      console.log('findSteamUser', e);
      return null;
    }
  }

  public async updateSteamUserFromSteam(
    steamid: string,
  ): Promise<Partial<any> | null> {
    try {
      const steamUser = await this.prisma.steamUser.findUnique({
        where: { id: steamid },
      });
      if (!steamUser) {
        console.log('Profile not found!');
        return null;
      }
      const res = await this.steamService.getSteamUser(steamid);
      const { personaname, profileurl, avatarfull, realname, loccountrycode } =
        res[0];

      if (
        !(
          personaname == steamUser.personaName &&
          profileurl == steamUser.profileUrl &&
          avatarfull == steamUser.avatar &&
          realname == steamUser.realname &&
          loccountrycode == steamUser.countryCode
        )
      ) {
        await this.prisma.steamUser.update({
          where: { id: steamid },
          data: {
            personaName: personaname,
            profileUrl: profileurl,
            avatar: avatarfull,
            realname: realname,
            countryCode: loccountrycode,
          },
        });
      }
      return null;
    } catch (e) {
      console.log('updateSteamUserFromSteam', e);
      return null;
    }
  }

  /* Update Steam level, bans, steamIds */
  public async updateSteamUserFromTradeIt(
    steamid: string,
  ): Promise<Partial<any> | null> {
    try {
      console.log('updateSteamUserFromTradeIt');
      const steamUser = await this.prisma.steamUser.findUnique({
        where: { id: steamid },
      });
      if (!steamUser) {
        console.log('Profile not found!');
        return null;
      }
      const tradeitData = await tradeItApi(steamid);
      if (!tradeitData) {
        console.log(tradeitData);
        return null;
      }

      if (steamUser.steamId2 === null) {
        const { steamId2, steamId3, steamIdHex } = tradeitData.data;

        await this.prisma.steamUser.update({
          where: { id: steamid },
          data: {
            steamId2: steamId2,
            steamId3: steamId3,
            steamIdHex: steamIdHex,
          },
        });
      }

      await this.prisma.steamUser.update({
        where: { id: steamid },
        data: { level: tradeitData.data.userLevel.toString() },
      });
      const {
        communityBanned,
        daysSinceLastBan,
        economyBan,
        gameBans,
        vacBanned,
        vacBans,
      } = tradeitData.data.userBans;
      await this.prisma.steamUserBans.update({
        where: { id: steamid },
        data: {
          communityBanned: communityBanned,
          daysSinceLastBan: daysSinceLastBan,
          economyBan: economyBan,
          gameBans: gameBans,
          vacBanned: vacBanned,
          vacBans: vacBans,
        },
      });

      return null;
    } catch (e) {
      console.log('updateSteamUser', e);
      return null;
    }
  }

  public async createSteamUser(id: string): Promise<Partial<any> | null> {
    try {
      const res = await this.steamService.getSteamUser(id);
      if (!res) {
        throw new BadRequestException(
          "Steam server doesen't work! Try again later!",
        );
      }
      const {
        steamid,
        personaname,
        profileurl,
        avatarfull,
        realname,
        timecreated,
        loccountrycode,
      } = res[0];

      const steamUser = await this.prisma.steamUser.create({
        data: {
          id: steamid,
          personaName: personaname,
          profileUrl: profileurl,
          avatar: avatarfull,
          realname: realname,
          timeCreated: this.formatTimestampToDateString(timecreated),
          countryCode: loccountrycode,
        },
      });

      await this.prisma.steamViewers.create({ data: { id: steamid } });

      await this.prisma.steamUserBans.create({
        data: { id: steamid },
      });
      await this.prisma.steamUser.update({
        where: { id: steamid },
        data: { steamUserBans: { connect: { id: steamid } } },
      });
      const tradeit = await tradeItApi(steamid);
      await this.prisma.steamUser.update({
        where: { id: steamUser.id },
        data: {
          steamId2: tradeit.data.steamId2,
          steamId3: tradeit.data.steamId3,
          steamIdHex: tradeit.data.steamIdHex,
        },
      });

      await this.updateSteamUserFromTradeIt(steamid);

      return await this.prisma.steamUser.findFirstOrThrow({
        where: { id: steamUser.id },
      });
    } catch (e) {
      console.log('catchhh', id);
      const data = await this.prisma.steamUser.findFirst({
        where: { profileUrl: 'https://steamcommunity.com/profiles/' + id },
      });
      console.log(data);
      return data;
    }
  }

  public async getViewers(steamid: string): Promise<number> {
    try {
      const viewers = await this.prisma.steamViewers.findFirstOrThrow({
        where: { id: steamid },
      });
      return viewers.viewers;
    } catch (e) {
      console.log('GET_VIEWERS', e);
      return 1;
    }
  }

  public async verifyAccountViaSteam(
    req: Request,
    steamid: string,
  ): Promise<Partial<any>> {
    const id = await this.tokenSerive.getIdFromToken(req);
    const userRole = await this.userService.getUserRole(id);
    if (userRole === 'VERIFIED_EMAIL') {
      console.log(id);
      const user = await this.prisma.user.update({
        where: { id: id },
        data: { steamUser: { connect: { id: steamid } } },
      });
      console.log(user);
      return user;
    }
    return { message: 'Steam already used!' };
  }

  async steamAuth(req, res) {
    console.log('STEAM_AUTH!');

    let valid_struct = await this.steamOAuth.verify_id(req.query);

    if (valid_struct.success) {
      console.log(`Validated Oauth, steamid i: ${valid_struct.steamid}`);

      const user_with_steamid = await this.prisma.steamUser.findFirst({
        where: { id: valid_struct.steamid },
        select: { userId: true },
      });
      console.log(user_with_steamid);

      const steamUserCreate = await this.findSteamUser(valid_struct.steamid);
      if (!steamUserCreate) {
        res.send({
          success: false,
          reason: 'Try again later!',
        });
        return;
      }
      //console.log('steamUserCreate!');
      const refreshToken = req.cookies.SteamREP_refreshToken;
      if (!refreshToken) {
        res.send({
          success: false,
          reason: 'First you need to log in to SteamRep!',
        });
        return;
      }
      //console.log('refreshToken!', refreshToken);
      const user = await this.prisma.jwtToken.findFirst({
        where: { refreshToken: refreshToken },
        include: { user: { select: { steamUser: true } } },
      });
      //console.log('user', user);
      if (!user) {
        res.send({
          success: false,
          reason: 'Login to SteamRep again!',
        });
        return;
      }

      if (user_with_steamid === null) {
        const userUpdate = await this.prisma.user.update({
          where: { id: user?.userId },
          data: {
            steamUser: { connect: { id: valid_struct.steamid } },
            role: 'VERIFIED',
          },
        });
        //console.log('userUpdate', userUpdate);
        res.redirect(
          process.env.FRONTEND_URL + 'profile/' + valid_struct.steamid,
        );
        return;
      }

      if (user_with_steamid?.userId !== null) {
        console.log('Пользователь есть в бд');
        res.send({
          success: false,
          reason:
            'SteamRep found that you already have a connected Steam account, please contact support!',
        });
        return;
      }

      const userUpdate = await this.prisma.user.update({
        where: { id: user?.userId },
        data: {
          steamUser: { connect: { id: valid_struct.steamid } },
          role: 'VERIFIED',
        },
      });
      //console.log('userUpdate', userUpdate);
      res.redirect(
        process.env.FRONTEND_URL + 'profile/' + valid_struct.steamid,
      );
    } else {
      //Validation of auth flow did not pass
      res.send({ success: false, reason: 'Invalid auth token.' });
    }
  }
}
