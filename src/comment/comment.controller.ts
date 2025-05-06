import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @HttpCode(HttpStatus.OK)
  @Post('create')
  signIn(@Body() dto: CreateCommentDto) {
    return this.commentService.createComment(dto);
  }
}
