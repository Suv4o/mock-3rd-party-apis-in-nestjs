import { Controller, Get, Query } from '@nestjs/common';
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
}
