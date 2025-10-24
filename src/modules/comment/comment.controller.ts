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
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAccessGuard } from 'src/guards/jwt_access.guard';
import { Request } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileExtensionInterceptor } from 'src/shared/Intercepters/file-type.interceptor';
import { GetCommenttDto } from './dto/get-comments.dto';

@Controller('')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAccessGuard)
  @UseInterceptors(FileExtensionInterceptor, FilesInterceptor('images'))
  @Post('comment/create/:id')
  createComment(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() dto: CreateCommentDto,
    @Req() req: Request,
    @Param('id') id: string,
  ) {
    return this.commentService.createComment(files, dto, req, id);
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
  @UseInterceptors(FileExtensionInterceptor, FilesInterceptor('images'))
  @Patch('comment/:commentId')
  updateComments(
    @UploadedFiles() files: Express.Multer.File[],
    @Param('commentId') commentId: string,
    @Body() dto: GetCommenttDto,
    @Req() req: Request,
  ) {
    return this.commentService.updateComment(files, commentId, dto, req);
  }
}
