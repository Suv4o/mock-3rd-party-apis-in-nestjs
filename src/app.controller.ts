import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/good-morning-world')
  getHelloWorld() {
    return this.appService.getHelloWorld();
  }

  @Get('/good-morning')
  getHelloPerson(@Query('person') person: string) {
    return this.appService.getHelloPerson(person);
  }

  @Post('/create-message')
  createMessage(@Body('message') message: string) {
    return this.appService.createMessage(message);
  }
}
