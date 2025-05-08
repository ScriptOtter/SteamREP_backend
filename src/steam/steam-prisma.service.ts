import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Steam64IdDto } from './dto/steamId.dto';
import { SteamService } from './steam.service';
import { SteamUserDto } from './dto/steam-user.dto';

@Injectable()
export class SteamPrismaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly steamService: SteamService,
  ) {}

  formatTimestampToDateString(timestamp: number) {
    // Создаем объект даты из метки времени
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

  async createSteamUser(dto: Steam64IdDto): Promise<void> {
    try {
      const res = await this.steamService.getSteamUser(dto);
      if (!res) {
        throw new BadRequestException();
      }
      //console.log(res);
      const id = res[0].steamid,
        personaname = res[0].personaname,
        profileurl = res[0].profileurl,
        avatar = res[0].avatar,
        realname = res[0].realname,
        timecreated = this.formatTimestampToDateString(res[0].timecreated);

      console.log(id, personaname, profileurl, avatar, realname, timecreated);

      const user = await this.prisma.steamUser.create({
        data: {
          id: id,
          personalName: personaname,
          profileUrl: profileurl,
          avatar: avatar,
          realname: realname,
          timeCreated: timecreated,
        },
      });
      console.log(user);
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
