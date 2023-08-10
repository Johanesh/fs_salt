import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactGroup as ContactGroupModel } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { GroupService } from '../../services/group/group.service';

@Controller('group')
export class GroupController {
  constructor(
    private readonly groupService: GroupService,
  ) {}

  @Get("/")
  getData() {
    return this.groupService.getAll();
  }

  @Get("/:id")
  async getContact(@Param('id') id: string): Promise<ContactGroupModel> {
    return this.groupService.getDetail({ id });
  }

  @Post("/")
  async create(
    @Body() data: {
      name: string;
      description: string;
    }
  ): Promise<ContactGroupModel> {
    let contactGroupData: ContactGroupModel = {
      id: uuidv4() as string,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...data
    }
    return this.groupService.create(contactGroupData);
  }

  @Put("/:id")
  async update(
    @Param('id') id: string,
    @Body() data: {
        name: string;
        description: string;
    }
  ): Promise<ContactGroupModel> {
    let contact = await this.groupService.getDetail({ id })
    if (contact) {
      let contactGroupData = {...contact, ...data};
      contactGroupData.updatedAt = new Date();

      return this.groupService.update({
        where: { id },
        data: contactGroupData
      });
    }
  }

  @Delete("/:id")
  async delete(@Param('id') id: string): Promise<ContactGroupModel> {
    return this.groupService.delete({ id });
  }
}