import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactList as ContactListModel } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { ContactGroupService } from '../../services/contactGroup/contactGroup.service';

@Controller('contact-group')
export class ContactGroupController {
  constructor(
    private readonly contactGroupService: ContactGroupService,
  ) {}

  @Post("/")
  async create(
    @Body() data: {
        contactGroupId: string;
        contactId: string;
    }
  ): Promise<ContactListModel> {
    let contactGroupData: ContactListModel = {
      id: uuidv4() as string,
      ...data
    }
    return this.contactGroupService.create(contactGroupData);
  }

  @Put("/:id")
  async update(
    @Param('id') id: string,
    @Body() data: {
        contactGroupId: string;
        contactId: string;
    }
  ): Promise<ContactListModel> {
    let contact = await this.contactGroupService.getDetail({ id })
    if (contact) {
      let contactData = {...contact, ...data};

      return this.contactGroupService.update({
        where: { id },
        data: contactData
      });
    }
  }

  @Delete("/:id")
  async delete(@Param('id') id: string): Promise<ContactListModel> {
    return this.contactGroupService.delete({ id });
  }
}