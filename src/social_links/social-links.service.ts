import { Request, Response } from 'express';
import { SaveSocialLinksDto } from './dto/saveSocialLinks.dto';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { tradeItApi } from 'src/api/tradeit';

@Injectable()
export class SocialLinksService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly prismaService: PrismaService,
  ) {}

  isValidURL(string: string) {
    try {
      new URL(string);
      return true;
    } catch (e) {
      return false;
    }
  }

  async getSocialLinks(id: string) {
    try {
      const links = await this.prismaService.linksInProfile.findFirst({
        where: { user: { steamUser: { id: id } } },
        select: {
          tradeLink: true,
          twitch: true,
          youtube: true,
          discord: true,
          telegram: true,
        },
      });
      if (!links) {
        throw new BadRequestException('Links not found!');
      }
      console.log(links);
      return links;
    } catch (e) {
      console.log(e);
    }
  }

  async saveSocialLinks(dto: SaveSocialLinksDto, req: Request): Promise<any> {
    const userId = await this.tokenService.getIdFromToken(req);
    if (!userId) {
      throw new UnauthorizedException('User not found!');
    }

    try {
      const links = await this.prismaService.linksInProfile.findFirst({
        where: { user: { id: userId } },
      });
      if (!links) {
        await this.prismaService.linksInProfile.create({
          data: { user: { connect: { id: userId } } },
        });
      }

      switch (dto.site) {
        case 'tradeLink': {
          if (
            !dto.link.startsWith(
              'https://steamcommunity.com/tradeoffer/new/?partner=',
            ) ||
            dto.link == 'https://steamcommunity.com/tradeoffer/new/?partner='
          ) {
            throw new BadRequestException('URL is not valid!');
          }
          await this.prismaService.linksInProfile.updateMany({
            where: { user: { id: userId } },
            data: { tradeLink: dto.link },
          });
          return { message: 'Trade link updated!' };
        }
        case 'telegramLink': {
          if (
            !dto.link.startsWith('https://t.me/') ||
            dto.link == 'https://t.me/'
          ) {
            throw new BadRequestException('URL is not valid!');
          }
          await this.prismaService.linksInProfile.updateMany({
            where: { user: { id: userId } },
            data: { telegram: dto.link },
          });
          return { message: 'Telegram link updated!' };
        }
        case 'twitchLink': {
          if (
            !dto.link.startsWith('https://www.twitch.tv/') ||
            dto.link == 'https://www.twitch.tv/'
          ) {
            throw new BadRequestException('URL is not valid!');
          }
          await this.prismaService.linksInProfile.updateMany({
            where: { user: { id: userId } },
            data: { twitch: dto.link },
          });
          return { message: 'Twitch link updated!' };
        }
        case 'youtubeLink': {
          if (
            !dto.link.startsWith('https://www.youtube.com/@') ||
            dto.link == 'https://www.youtube.com/@'
          ) {
            throw new BadRequestException('URL is not valid!');
          }
          await this.prismaService.linksInProfile.updateMany({
            where: { user: { id: userId } },
            data: { youtube: dto.link },
          });
          return { message: 'Youtube link updated!' };
        }
        case 'discordNickname': {
          if (this.isValidURL(dto.link)) {
            throw new BadRequestException('Please enter your nickname!');
          }
          await this.prismaService.linksInProfile.updateMany({
            where: { user: { id: userId } },
            data: { discord: dto.link },
          });

          return { message: 'Discord Nickname updated!' };
        }
        default: {
          throw new BadRequestException('Link not found!');
        }
      }
    } catch (e) {
      console.log('SOCIAL_LINKS_SERVICE', e);
      throw new BadRequestException('Incorrect data');
    }
  }
}
