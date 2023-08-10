import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, ContactList } from '@prisma/client';

@Injectable()
export class ContactGroupService {
  constructor(private prisma: PrismaService) {}

  async getDetail(id: Prisma.ContactListWhereUniqueInput): Promise<ContactList | null> {
    return await this.prisma.contactList.findUnique({
        where: id,
      })
  }

  async create(data: ContactList): Promise<ContactList> {
    return this.prisma.contactList.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.ContactListWhereUniqueInput;
    data: ContactList;
  }): Promise<ContactList> {
    const { where, data } = params;
    return this.prisma.contactList.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.ContactListWhereUniqueInput): Promise<ContactList> {
    return this.prisma.contactList.delete({
      where,
    });
  }
}