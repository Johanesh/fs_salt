import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { PrismaService } from './services/prisma/prisma.service';
import { ContactService } from './services/contact/contact.service';
import { ContactsController } from './controllers/contact/contact.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    ContactsController,
  ],
  providers: [
    AppService,
    PrismaService,
    UserService,
    ContactService
  ],
})
export class AppModule {}
