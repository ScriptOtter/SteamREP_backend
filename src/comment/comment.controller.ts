import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';
import { Request } from 'express';

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
  @Get('comments/:steamid')
  getComments(@Param('steamid') steamid: string) {
    return this.commentService.getComments(steamid);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Delete('comment/:commentId')
  deleteComments(@Param('commentId') commentId: string, @Req() req: Request) {
    return this.commentService.deleteComment(commentId, req);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @Patch('comment/:commentId')
  updateComments(
    @Param('commentId') commentId: string,
    @Body() content: string,
    @Req() req: Request,
  ) {
    console.log(commentId, content);
    return this.commentService.updateComment(commentId, content, req);
  }
}
