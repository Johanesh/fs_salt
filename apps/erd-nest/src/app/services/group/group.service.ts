import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, ContactGroup } from '@prisma/client';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<ContactGroup[]> {
    return await this.prisma.contactGroup.findMany()
  }

  async getDetail(id: Prisma.ContactGroupWhereUniqueInput): Promise<ContactGroup | null> {
    return await this.prisma.contactGroup.findUnique({
        where: id,
        include: {
            ContactList: true,
        },
      })
  }

  async create(data: Prisma.ContactGroupCreateInput): Promise<ContactGroup> {
    return this.prisma.contactGroup.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.ContactGroupWhereUniqueInput;
    data: Prisma.ContactGroupUpdateInput;
  }): Promise<ContactGroup> {
    const { where, data } = params;
    return this.prisma.contactGroup.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.ContactGroupWhereUniqueInput): Promise<ContactGroup> {
    return this.prisma.contactGroup.delete({
      where,
    });
  }
}