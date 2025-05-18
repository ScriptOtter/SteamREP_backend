import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SteamService {
  constructor() {}

  checkIsSteam64Id(steamParam: string) {
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
}
