import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { bookGuard } from './guard/book.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(bookGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
