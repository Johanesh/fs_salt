import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Contact } from '@prisma/client';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Contact[]> {
    return await this.prisma.contact.findMany()
  }

  async getDetail(id: Prisma.ContactWhereUniqueInput): Promise<Contact | null> {
    return await this.prisma.contact.findUnique({
        where: id,
      })
  }

  async create(data: Prisma.ContactCreateInput): Promise<Contact> {
    return this.prisma.contact.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.ContactWhereUniqueInput;
    data: Prisma.ContactUpdateInput;
  }): Promise<Contact> {
    const { where, data } = params;
    return this.prisma.contact.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.ContactWhereUniqueInput): Promise<Contact> {
    return this.prisma.contact.delete({
      where,
    });
  }
}