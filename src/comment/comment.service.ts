import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async createComment(dto: CreateCommentDto): Promise<any> {
    const { content, author_id, recipient_id } = dto;
    console.log(content, author_id, recipient_id);

    try {
      const comment = await this.prisma.comment.create({
        data: {
          content: content,
          authorId: author_id,
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
