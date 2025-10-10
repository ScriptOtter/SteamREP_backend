import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GCService } from './steam-information/gc.service';
import { TokenService } from '../auth/tokens/tokens.service';
import { Request } from 'express';
import axios from 'axios';
import { STEAM_API } from '../steam/steam-api';

@Injectable()
export class Cs2Service {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly gc: GCService,
    private readonly token: TokenService,
  ) {}
  public async getCodes(req: Request) {
    const userId = await this.token.getIdFromToken(req);
    if (!userId) throw new UnauthorizedException('User not found');
    const user = await this.prismaService.steamUser.findUnique({
      where: { userId },
    });
    if (!user)
      throw new BadRequestException(
        'Steam account is not connected to the site',
      );
    return await this.prismaService.steamUser.findUnique({
      where: { id: user.id },
      select: { sharedCode: true, gameAuthenticationCode: true },
    });
  }

  public async saveSharedCode(req: Request, sharedCode: string) {
    const userId = await this.token.getIdFromToken(req);
    if (!userId) throw new UnauthorizedException('User not found');
    const user = await this.prismaService.steamUser.findUnique({
      where: { userId },
    });
    if (!user)
      throw new BadRequestException(
        'Steam account is not connected to the site',
      );
    const isActiveGC = await this.gc.getAccountInformation(user.id);
    if (!isActiveGC) throw new BadRequestException('Try again later!');
    if (user.sharedCode) return true;
    const match = await this.gc.getMatchInfoFromSharedCode(sharedCode);

    if (!match) throw new BadRequestException('Share code not valid');

    const players = match?.roundstatsall[0]?.reservation?.account_ids;

    if (players.toString() === '')
      throw new BadRequestException('Share code not valid');
    let isValid: boolean = false;
    for (const player of players) {
      const player_id = Number(BigInt(user.id) - BigInt(76561197960265728));

      if (player_id === player) isValid = true;
    }
    if (!isValid) throw new BadRequestException('Share code not valid');
    await this.prismaService.steamUser.update({
      where: { id: user.id },
      data: { sharedCode },
    });
    return true;
  }

  public async saveAuthenticationCode(
    req: Request,
    authenticationCode: string,
  ) {
    const userId = await this.token.getIdFromToken(req);
    if (!userId) throw new UnauthorizedException('User not found');
    const user = await this.prismaService.steamUser.findFirst({
      where: { userId },
    });
    if (!user)
      throw new BadRequestException(
        'Steam account is not connected to the site',
      );
    if (user.gameAuthenticationCode) return true;
    const isActiveGC = await this.gc.getAccountInformation(user.id);
    if (!isActiveGC) throw new BadRequestException('Try again later!');
    const sharedCode = user.sharedCode;
    if (!sharedCode) throw new BadRequestException('Share code not found.');
    try {
      let res = await axios.get(
        STEAM_API.GetNextMatchSharingCode +
          `?key=${process.env.STEAM_API}&steamid=${user.id}&steamidkey=${authenticationCode}&knowncode=${sharedCode}`,
      );
      if (res.status === 200 || res.status === 202)
        await this.prismaService.steamUser.update({
          where: { id: user.id },
          data: { gameAuthenticationCode: authenticationCode },
        });
      return true;
    } catch (e) {
      throw new BadRequestException('Authentication code not valid');
    }
  }
}
