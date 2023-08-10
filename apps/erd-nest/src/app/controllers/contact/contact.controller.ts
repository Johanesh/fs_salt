import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Contact as ContactModel } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { ContactService } from '../../services/contact/contact.service';

@Controller('contact')
export class ContactsController {
  constructor(
    private readonly contactService: ContactService,
  ) {}

  @Get("/")
  getData() {
    return this.contactService.getAll();
  }

  @Get("/:id")
  async getContact(@Param('id') id: string): Promise<ContactModel> {
    return this.contactService.getDetail({ id });
  }

  @Post("/")
  async create(
    @Body() data: {
      phoneNumber: string;
      name: string;
      address: string;
      email: string;
    }
  ): Promise<ContactModel> {
    let contactData: ContactModel = {
      id: uuidv4() as string,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastActivityAt: new Date(),
      ...data
    }
    return this.contactService.create(contactData);
  }

  @Put("/:id")
  async update(
    @Param('id') id: string,
    @Body() data: {
        phoneNumber: string;
        name: string;
        address: string;
        email: string;
    }
  ): Promise<ContactModel> {
    let contact = await this.contactService.getDetail({ id })
    if (contact) {
      let contactData = {...contact, ...data};
      contactData.updatedAt = new Date();
      contactData.lastActivityAt = new Date();

      return this.contactService.update({
        where: { id },
        data: contactData
      });
    }
  }

  @Delete("/:id")
  async delete(@Param('id') id: string): Promise<ContactModel> {
    return this.contactService.delete({ id });
  }
}