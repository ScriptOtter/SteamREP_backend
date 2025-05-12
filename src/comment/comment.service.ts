import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CommentService {
  constructor(
    private readonly prisma: PrismaService,
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
}
