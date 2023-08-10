import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { PrismaService } from './services/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
  ],
  providers: [
    AppService,
    PrismaService,
    UserService
  ],
})
export class AppModule {}
