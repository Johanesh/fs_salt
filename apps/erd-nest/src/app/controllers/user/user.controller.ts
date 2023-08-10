import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { UserService } from '../../services/user/user.service';

@Controller('user')
export class UsersController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get("/")
  getData() {
    return this.userService.getAll();
  }

  @Get("/:id")
  async getUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.getDetail({ id });
  }

  @Post("/")
  async create(
    @Body() data: {
      email: string;
      name: string;
      password: string;
    }
  ): Promise<UserModel> {
    let userData: UserModel = {
      id: uuidv4() as string,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastActivityAt: new Date(),
      emailVerified: new Date(),
      ...data
    }
    return this.userService.create(userData);
  }

  @Put("/:id")
  async update(
    @Param('id') id: string,
    @Body() data: {
      email: string;
      name: string;
      password: string;
    }
  ): Promise<UserModel> {
    let user = await this.userService.getDetail({ id })
    if (user) {
      let userData = {...user, ...data};
      userData.updatedAt = new Date();
      userData.lastActivityAt = new Date();

      return this.userService.update({
        where: { id },
        data: userData
      });
    }
  }

  @Delete("/:id")
  async delete(@Param('id') id: string): Promise<UserModel> {
    return this.userService.delete({ id });
  }
}