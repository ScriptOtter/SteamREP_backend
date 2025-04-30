import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { signUpDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/auth/signUp')
  create(@Body() dto: signUpDto) {
    console.log(dto, '2');
    return this.appService.asd(dto); //Вызывает функцию create из services
  }
}
