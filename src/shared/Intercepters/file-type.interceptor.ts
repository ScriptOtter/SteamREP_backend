import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import * as path from 'path';

@Injectable()
export class FileExtensionInterceptor implements NestInterceptor {
  private readonly allowedExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.webp',
  ];

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const files = request.files; // Предполагается, что файлы находятся в request.files

    if (files) {
      for (const file of files) {
        const extname = path.extname(file.originalname).toLowerCase(); // Получаем расширение файла

        // Проверяем, разрешено ли расширение
        if (!this.allowedExtensions.includes(extname)) {
          throw new ForbiddenException(
            'Only image files with allowed extensions are allowed.',
          );
        }
      }
    }

    return next.handle();
  }
}
