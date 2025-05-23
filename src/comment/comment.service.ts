import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { GetCommenttDto } from './dto/get-comments.dto';
import { SteamService } from 'src/steam/steam.service';
import { TokenService } from 'src/auth/tokens/tokens.service';

@Injectable()
export class CommentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly steamService: SteamService,
    private readonly jwtService: JwtService,
    private readonly tokenService: TokenService,
  ) {}

  async createComment(
    dto: CreateCommentDto,
    req: Request,
    id: string,
  ): Promise<any> {
    const userAccessToken = req.cookies.SteamREP_accessToken;
    const userId = await this.tokenService.getIdFromToken(req);
    console.log(dto.content, userId, id);
    try {
      const steamid = await this.steamService.getSteam64Id(id);
      const comment = await this.prisma.comment.create({
        data: {
          content: dto.content,
          authorId: userId,
          recipientId: steamid,
        },
      });
      if (!comment) {
        throw new BadRequestException('Comment is not created');
      }
      return comment;
    } catch (e) {
      console.log(e);
    }
  }

  async getComments(steamid: string): Promise<any> {
    let id = this.steamService.checkIsSteam64Id(steamid);
    if (!id) {
      steamid = await this.steamService.getSteam64Id(steamid);
    }
    try {
      const existsUser = await this.prisma.steamUser.findUnique({
        where: { id: steamid },
      });
      if (!existsUser) {
        return {};
      }
      const comments = await this.prisma.comment.findMany({
        where: { recipientId: steamid },
        select: {
          recipientId: true,
          id: true,
          content: true,
          createdAt: true,
          updatedAt: true,
          author: {
            select: {
              username: true,
              avatar: true,
              steamUser: { select: { avatar: true } },
            },
          },
        },
        orderBy: { updatedAt: 'desc' },
      });
      return comments;
    } catch (e) {
      console.log(e);
      return {};
    }
  }
}
