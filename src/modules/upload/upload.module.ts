import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileMiddleware } from 'src/shared/Middlewares/FileMiddleware';
import { CommentController } from '../comment/comment.controller';

@Module({
  providers: [UploadService],
  exports: [UploadService],
})
export class UploadModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FileMiddleware).forRoutes(CommentController);
  }
}
