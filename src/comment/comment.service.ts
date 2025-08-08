import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { SteamService } from 'src/steam/steam.service';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { join } from 'path';
import { access, constants, unlink, unlinkSync } from 'fs';

@Injectable()
export class CommentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly steamService: SteamService,
    private readonly jwtService: JwtService,
    private readonly tokenService: TokenService,
  ) {}

  async deleteImage(filename: string) {
    const filePath = join('static/images', filename);
    console.log(filePath);
    try {
      await unlinkSync(filePath);
      console.log(filename, 'успешно удален.');
    } catch (error) {
      console.error('DELETE_FILE', error);
      throw new Error('Ошибка при удалении файла');
    }
  }

  async createComment(
    file: Express.Multer.File,
    dto: CreateCommentDto,
    req: Request,
    id: string,
  ): Promise<any> {
    const userId = await this.tokenService.getIdFromToken(req);
    if (!userId) {
      throw new UnauthorizedException('User not found!');
    }
    console.log(dto.content, userId, id);
    const steamid = async (id): Promise<string> => {
      if (await this.steamService.checkIsSteam64Id(id)) {
        return id;
      } else {
        return await this.steamService.getSteam64Id(id);
      }
    };
    try {
      if (file) {
        console.log(file);
      }
      const comment = await this.prisma.comment.create({
        data: {
          content: dto.content,
          authorId: userId,
          pictureUrl: dto.pictureUrl,
          recipientId: await steamid(id),
        },
        include: { author: {} },
      });
      if (!comment) {
        throw new BadRequestException('Comment is not created');
      }

      console.log(comment);

      return comment;
    } catch (e) {
      console.log(e);
      throw new BadRequestException(
        "You can't leave more than one comment. Please delete or edit your previous comment.",
      );
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
          pictureUrl: true,
          id: true,
          content: true,
          createdAt: true,
          updatedAt: true,
          author: {
            select: {
              role: true,
              username: true,
              avatar: true,
              steamUser: {
                select: { avatar: true, personaName: true, id: true },
              },
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

  async deleteComment(commentId, req) {
    const userId = await this.tokenService.getIdFromToken(req);

    try {
      const comment = await this.prisma.comment.delete({
        where: { id: commentId, authorId: userId },
      });
      if (!comment) {
        console.log('Not found comment!');
      }
      if (comment?.pictureUrl) this.deleteImage(comment?.pictureUrl);
      return comment;
    } catch (e) {
      console.log('DELETE_COMMENT', e);
    }
  }

  async updateComment(commentId, content, req) {
    const userId = await this.tokenService.getIdFromToken(req);
    if (!userId) {
      throw new UnauthorizedException();
    }

    try {
      if (content?.pictureUrl) {
        let comment = this.prisma.comment.update({
          where: { id: commentId, authorId: userId },
          data: content,
        });
        if (!comment) {
          throw new BadRequestException('Comment not found!');
        }
        return comment;
      } else {
        const com = await this.prisma.comment.findFirst({
          where: { id: commentId, authorId: userId },
        });

        let comment = await this.prisma.comment.update({
          where: { id: commentId, authorId: userId },
          data: { content: content.content, pictureUrl: null },
        });
        if (com?.pictureUrl && com?.pictureUrl != comment?.pictureUrl) {
          this.deleteImage(com?.pictureUrl);
        }
        if (!comment) {
          throw new BadRequestException('Comment not found!');
        }
        return comment;
      }
    } catch (e) {
      console.log('DELETE_COMMENT', e);
    }
  }
}
