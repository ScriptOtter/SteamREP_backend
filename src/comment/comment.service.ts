import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { GetCommenttDto } from './dto/get-comments.dto';
import { SteamService } from 'src/steam/steam.service';

@Injectable()
export class CommentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly steamService: SteamService,
    private readonly jwtService: JwtService,
  ) {}

  async createComment(dto: CreateCommentDto, req: Request): Promise<any> {
    const { content, author_id, recipient_id } = dto;
    const userAccessToken = req.cookies.SteamREP_accessToken;
    const userId = this.jwtService.verify(userAccessToken, {
      secret: process.env.JWT_ACCESS_SECRET!,
    }).id;

    try {
      const comment = await this.prisma.comment.create({
        data: {
          content: content,
          authorId: userId,
          recipientId: recipient_id,
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
