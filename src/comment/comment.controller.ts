import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';
import { Request } from 'express';
import { GetCommenttDto } from './dto/get-comments.dto';

@Controller('')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Post('comment/create/:id')
  signIn(
    @Body() dto: CreateCommentDto,
    @Req() req: Request,
    @Param('id') id: string,
  ) {
    return this.commentService.createComment(dto, req, id);
  }

  @HttpCode(HttpStatus.OK)
  @Get('comments/:id')
  getComments(@Param('id') id: string) {
    return this.commentService.getComments(id);
  }
}
