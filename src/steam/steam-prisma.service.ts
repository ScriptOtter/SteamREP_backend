import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SteamService } from './steam.service';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { Request } from 'express';
import { UserService } from 'src/user/user.service';
import { SteamOAuth } from './steam.oauth';

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

  public async createSteamUser(dto: string): Promise<Partial<any> | null> {
    try {
      const res = await this.steamService.getSteamUser(dto);
      console.log(res);
      console.log(res.profileurl);
      if (res.profileurl === null) {
        const steamUser = await this.prisma.steamUser.findUnique({
          where: { id: res.steamid },
          include: {
            user: {
              select: { id: true, username: true, avatar: true, role: true },
            },
          },
        });
        return steamUser;
      }

      const {
        steamid,
        personaname,
        profileurl,
        avatarfull,
        realname,
        timecreated,
      } = res[0];
      console.log(res);
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
      if (user_with_steamid?.userId !== null) {
        console.log('Пользователь есть в бд');
        res.send({
          success: false,
          reason:
            'SteamRep found that you already have a connected Steam account, please contact support!',
        });
        return;
      }
      const steamUserCreate = await this.createSteamUser(valid_struct.steamid);
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

      const userUpdate = await this.prisma.user.update({
        where: { id: user?.userId },
        data: {
          steamUser: { connect: { id: valid_struct.steamid } },
          role: 'VERIFIED_STEAM',
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
