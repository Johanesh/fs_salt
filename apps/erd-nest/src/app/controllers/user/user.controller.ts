import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }
}

@Controller('user/:id')
export class UserDetailController {
  @Get()
  findAll(@Param() params: { id: string }): string {
    return `This action returns insert single data ${params.id}`;
  }
}

@Controller('user/insert')
export class UserInsertController {
  @Get()
  findAll(): string {
    return 'This action returns insert user';
  }
}

@Controller('user/update/:id')
export class UserUpdateController {
  @Get()
  findAll(@Param() params: { id: string }): string {
    return `This action returns update user ${params.id}`;
  }
}

@Controller('user/delete/:id')
export class UserDeleteController {
  @Get()
  findAll(@Param() params: { id: string }): string {
    return `This action returns delete user ${params.id}`;
  }
}