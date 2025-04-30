import { Injectable } from '@nestjs/common';
import { signUpDto } from './dto';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('hello');
    return 'Hello World!';
  }

  asd(dto: signUpDto) {
    //Просто функция принимающая данные dto по типам из signUpDto и отдающая this.dto
    console.log('signUp 1');
    return dto;
  }
}
