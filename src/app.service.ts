import { ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Partial<any> {
    console.log('hello');
    return { message: 'Hello World!' };
  }
}
