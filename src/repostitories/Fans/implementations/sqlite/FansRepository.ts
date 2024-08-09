import { IFansRepository } from "../../IFansRepository";
import { Fan } from "../../../../entities/Fan";
import prisma from "../../../../../prisma/client";

export class FansRepository implements IFansRepository{

  async index(): Promise<Fan[]> {
    return [];
  }

  async save(fan: Fan): Promise<any> {
    return prisma.fan.create({
      data: {
        id: fan.id ?? fan.id,
        name: fan.name ?? fan.name,
        email: fan.email ?? fan.email,
        instagram: fan.instagram ?? fan.instagram,
        is_follower: fan.is_follower
      }
    });
  }

  edit(fan: Fan): Promise<any> {
    return prisma.fan.updateMany({
      where: {
        id: fan.id
      },
      data: { ...fan }
    });
  }

  findByEmail(email: string): Promise<any> {
    return prisma.fan.findUnique({ where: { email } });
  }

  findByInstagram(instagram: string): Promise<any> {
    return prisma.fan.findUnique({ where: { instagram } });
  }
}