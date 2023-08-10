import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}

@Controller('contact/group')
export class ContactGroupsController {
  @Get()
  findAll(): string {
    return 'This action returns all contact group';
  }
}
