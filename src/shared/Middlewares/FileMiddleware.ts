import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class FileMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    // Здесь мы добавляем файлы в request
    req.files = req.files || []; // Убедитесь, что files существует
    next();
  }
}
