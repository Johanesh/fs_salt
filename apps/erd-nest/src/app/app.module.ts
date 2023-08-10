import { Module } from '@nestjs/common';

import { UsersController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { PrismaService } from './services/prisma/prisma.service';
import { ContactService } from './services/contact/contact.service';
import { ContactsController } from './controllers/contact/contact.controller';
import { ContactGroupController } from './controllers/contactGroup/contactGroup.controller';
import { ContactGroupService } from './services/contactGroup/contactGroup.service';

@Module({
  imports: [],
  controllers: [
    UsersController,
    ContactsController,
    ContactGroupController
  ],
  providers: [
    PrismaService,
    UserService,
    ContactService,
    ContactGroupService
  ],
})
export class AppModule {}
