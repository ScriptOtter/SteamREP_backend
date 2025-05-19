import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SteamService } from './steam.service';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { Request } from 'express';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SteamPrismaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly steamService: SteamService,
    private readonly tokenSerive: TokenService,
    private readonly userService: UserService,
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

  public async createSteamUser(dto: string): Promise<Partial<any>> {
    try {
      const res = await this.steamService.getSteamUser(dto);
      console.log(res);
      if (!res) {
        throw new BadRequestException();
      }

      const {
        steamid,
        personaname,
        profileurl,
        avatarfull,
        realname,
        timecreated,
      } = res[0];

      const steamUser = await this.prisma.steamUser.findFirst({
        where: { id: steamid },
        include: {
          user: {
            select: { id: true, username: true, avatar: true, role: true },
          },
        },
      });

      if (!steamUser) {
        const user = await this.prisma.steamUser.create({
          data: {
            id: steamid,
            personaName: personaname,
            profileUrl: profileurl,
            avatar: avatarfull,
            realname: realname,
            timeCreated: this.formatTimestampToDateString(timecreated),
          },
        });
        return user;
      }
      if (
        !(
          personaname == steamUser.personaName &&
          profileurl == steamUser.profileUrl &&
          avatarfull == steamUser.avatar &&
          realname == steamUser.realname
        )
      ) {
        const user = await this.prisma.steamUser.update({
          where: { id: steamid },
          data: {
            personaName: personaname,
            profileUrl: profileurl,
            avatar: avatarfull,
            realname: realname,
          },
        });
      }
      return steamUser;
    } catch (e) {
      console.log(e);
      return e;
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
}
