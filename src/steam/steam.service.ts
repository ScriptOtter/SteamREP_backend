import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { SteamUrlDto } from './dto/steamUrl.dto';
import { Steam64IdDto } from './dto/steamId.dto';
import { SteamUserDto } from './dto/steam-user.dto';

@Injectable()
export class SteamService {
  constructor() {}

  async getSteam64Id(dto: SteamUrlDto): Promise<string> {
    function extractSteamId(url: string): string {
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

    const id = extractSteamId(dto.steamurl);
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
      return res.data.response;
    } catch (e) {
      throw new BadRequestException('Try later!');
    }
  }

  public async getSteamUser(steam64Id: Steam64IdDto): Promise<Partial<any>> {
    const url =
      'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' +
      process.env.STEAM_API! +
      '&steamids=' +
      steam64Id;
    const res = await axios.get(url);
    if (!res) {
      throw new BadRequestException('Try later!');
    }
    return res.data.response.players;
  }
}
