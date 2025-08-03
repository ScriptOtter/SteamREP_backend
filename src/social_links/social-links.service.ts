import { Request } from 'express';
import { SaveSocialLinksDto } from './dto/saveSocialLinks.dto';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

export class SocialLinksService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly prismaService: PrismaService,
  ) {}

  async saveSocialLinks(dto: SaveSocialLinksDto, req: Request) {
    console.log(req.cookies);

    const userId = await this.tokenService.getIdFromToken(req);
    if (!userId) {
      throw new UnauthorizedException('User not found!');
    }
    try {
      const links = await this.prismaService.linksInProfile.findFirstOrThrow({
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
            )
          ) {
            throw new BadRequestException('URL is not valid!');
          }

          await this.prismaService.linksInProfile.updateMany({
            where: { user: { id: userId } },
            data: { tradeLink: dto.link },
          });
        }
        case 'telegramLink': {
          if (!dto.link.startsWith('https://t.me/')) {
            throw new BadRequestException('URL is not valid!');
          }
          await this.prismaService.linksInProfile.updateMany({
            where: { user: { id: userId } },
            data: { telegram: dto.link },
          });
        }
        case 'twitchLink': {
          if (!dto.link.startsWith('https://twitch.tv/')) {
            throw new BadRequestException('URL is not valid!');
          }
          await this.prismaService.linksInProfile.updateMany({
            where: { user: { id: userId } },
            data: { twitch: dto.link },
          });
        }
        case 'youtubeLink': {
          if (!dto.link.startsWith('https://youtube.com/@')) {
            throw new BadRequestException('URL is not valid!');
          }
          await this.prismaService.linksInProfile.updateMany({
            where: { user: { id: userId } },
            data: { youtube: dto.link },
          });
        }
        case 'discordNickname': {
          await this.prismaService.linksInProfile.updateMany({
            where: { user: { id: userId } },
            data: { discord: dto.link },
          });
        }
        default: {
          throw new BadRequestException('Link not found!');
        }
      }
    } catch (e) {
      console.log('SOCIAL_LINKS_SERVICE', e);
    }
  }
}
