import { IContractorsRepository } from "../../IContractorsRepository";
import { Contractor } from "../../../../entities/Contractor";
import prisma from "../../../../../prisma/client";
import { Fan } from "../../../../entities/Fan";
export class ContractorsRepository implements IContractorsRepository{

  async list(): Promise<Contractor[]> {
    return (await prisma.contractor.findMany({ include: { events_held: true } })).map(ctt => {
      return new Contractor({
        ...ctt,
        events_held: ctt.events_held.map(ev => {
          return {
            ...ev,
            contractor: null,
            requested_musics: null,
            photos: null
          }
        })
      })
    });
  }

  async save(contractor: Contractor): Promise<Contractor> {
    const cont = await prisma.contractor.create({
      data: {
        id: contractor.id,
        name: contractor.name,
        email: contractor.email,
        phone: contractor.phone,
        is_commerce: contractor.is_commerce
      }
    })

    const created = new Contractor({
      ...cont,
      events_held: null
    })

    return created;
  }

  async find(id: string): Promise<Contractor> {
    const res = await prisma.contractor.findUnique({
      where: { id: id },
      include: {
        events_held: true
      }
    });

    return new Contractor({
      ...res,
      events_held: res.events_held.map(ev => {
        return {
          ...ev,
          contractor: null,
          requested_musics: null,
          photos: null
        }
      })
    })
  }

  async delete(id: string): Promise<Contractor> {
    const cont = this.find(id)
    await prisma.contractor.delete({
      where: { id: id }
    });
    return cont
  }

  async edit(contractor: Contractor): Promise<Contractor> {
    await prisma.contractor.updateMany({
      where: {
        id: contractor.id
      },
      data: {
        name: contractor.name,
        email: contractor.email,
        phone: contractor.phone,
        is_commerce: contractor.is_commerce
      }
    });

    return contractor;
  }
}