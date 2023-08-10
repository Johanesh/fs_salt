import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserDeleteController, UserDetailController, UserInsertController, UserUpdateController, UsersController } from './controllers/user/user.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    UserDetailController,
    UserInsertController,
    UserUpdateController,
    UserDeleteController
  ],
  providers: [AppService],
})
export class AppModule {}
