import { Module } from '@nestjs/common';

import { UsersController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { PrismaService } from './services/prisma/prisma.service';
import { ContactService } from './services/contact/contact.service';
import { ContactsController } from './controllers/contact/contact.controller';
import { GroupController } from './controllers/group/group.controller';
import { GroupService } from './services/group/group.service';

@Module({
  imports: [],
  controllers: [
    UsersController,
    ContactsController,
    GroupController
  ],
  providers: [
    PrismaService,
    UserService,
    ContactService,
    GroupService
  ],
})
export class AppModule {}
