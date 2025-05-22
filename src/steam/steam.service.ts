import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { SteamOAuth } from './steam.oauth';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SteamService {
  constructor(
    private readonly steamOAuth: SteamOAuth,
    private readonly prisma: PrismaService,
  ) {}

  public checkIsSteam64Id(steamParam: string) {
    const prefix = '7656';
    if (steamParam.startsWith(prefix)) {
      return true;
    }
    return false;
  }

  getCorrectUrl(url: string): string {
    if (url.endsWith('/')) {
      url = url.slice(0, -1);
    }

    const prefix = 'https://steamcommunity.com/id/';
    const prefix2 = 'steamcommunity.com/id/';
    if (url.startsWith(prefix2)) {
      return url.substring(prefix2.length);
    }
    if (url.startsWith(prefix)) {
      return url.substring(prefix.length);
    }

    return url;
  }
  async getSteam64Id(steamId: string): Promise<string> {
    const id = this.getCorrectUrl(steamId);
    const url =
      'https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=' +
      process.env.STEAM_API! +
      '&vanityurl=' +
      id;
    try {
      const res = await axios.get(url);
      if (!res) {
        throw new BadRequestException('Try later!');
      }
      return res.data.response.steamid;
    } catch (e) {
      throw new BadRequestException('Try later!');
    }
  }

  async getPlayerBans(steamid: string): Promise<Partial<any>> {
    const url =
      'https://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=' +
      process.env.STEAM_API! +
      '&steamids=' +
      steamid;
    try {
      const res = await axios.get(url);
      if (!res) {
        throw new BadRequestException('Try later!');
      }
      return res;
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Try later!');
    }
  }

  async getSteamLevel(steamid: string): Promise<Partial<any>> {
    const url =
      'https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=' +
      process.env.STEAM_API! +
      '&steamids=' +
      steamid;
    try {
      const res = await axios.get(url);
      if (!res) {
        throw new BadRequestException('Try later!');
      }
      return res;
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Try later!');
    }
  }

  async getRecentlyPlayedGames(steamid: string): Promise<Partial<any>> {
    const url =
      'https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=' +
      process.env.STEAM_API! +
      '&steamids=' +
      steamid;
    try {
      const res = await axios.get(url);
      if (!res) {
        throw new BadRequestException('Try later!');
      }
      return res;
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Try later!');
    }
  }

  async getOwnedGames(steamid: string): Promise<Partial<any>> {
    const url =
      'https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=' +
      process.env.STEAM_API! +
      '&steamids=' +
      steamid;
    try {
      const res = await axios.get(url);
      if (!res) {
        throw new BadRequestException('Try later!');
      }
      return res;
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Try later!');
    }
  }

  public async getSteamUser(steamParam: string): Promise<Partial<any>> {
    async function fetchSteamUser(steam64Id: string) {
      try {
        const url =
          'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' +
          process.env.STEAM_API +
          '&steamids=' +
          steam64Id;
        const res = await axios.get(url);
        if (!res) {
          throw new BadRequestException('Try later!');
        }
        return res.data.response.players;
      } catch (e) {
        return e;
      }
    }

    const isSteam64Id = this.checkIsSteam64Id(steamParam);
    if (!isSteam64Id) {
      const steam64Id = await this.getSteam64Id(steamParam);
      return fetchSteamUser(steam64Id);
    }
    return fetchSteamUser(steamParam);
  }

  //https://api.steampowered.com/IPlayerService/GetAnimatedAvatar/v1/?key=B0C642A55BA751013BA4CE32AAF8D905&steamid=76561198160910123
  async steamAuth(req, res) {
    console.log('STEAM_AUTH!');

    let valid_struct = await this.steamOAuth.verify_id(req.query);

    if (valid_struct.success) {
      console.log(`Validated Oauth, steamid i: ${valid_struct.steamid}`);

      const refreshToken = req.cookies.SteamREP_refreshToken;
      if (!refreshToken) {
        res.send({
          success: false,
          reason: 'First you need to log in to SteamRep!',
        });
        return;
      }
      const user = await this.prisma.jwtToken.findFirst({
        where: { refreshToken: refreshToken },
      });
      if (!user) {
        res.send({
          success: false,
          reason: 'Login to SteamRep again!',
        });
        return;
      }

      const userSteam = await this.prisma.user.findUnique({
        where: { id: user?.userId },
        select: { steamUser: true },
      });
      if (!Boolean(userSteam?.steamUser == null)) {
        res.send({
          success: false,
          reason:
            'SteamRep found that you already have a connected Steam account, please contact support!',
        });
        console.log(userSteam);
        return;
      }
      const userUpdate = await this.prisma.user.update({
        where: { id: user?.userId },
        data: {
          steamUser: { connect: { id: valid_struct.steamid } },
          role: 'VERIFIED_STEAM',
        },
      });

      res.redirect('http://localhost:5173/profile/' + valid_struct.steamid);
    } else {
      //Validation of auth flow did not pass
      res.send({ success: false, reason: 'Invalid auth token.' });
    }
  }
}
