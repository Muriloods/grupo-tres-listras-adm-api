import { IEventsRepository } from "../../IEventsRepository";
import { Event } from "../../../../entities/Event";
import prisma from "../../../../../prisma/client";

export class EventsRepository implements IEventsRepository{

  async list(): Promise<Event[]> {
    return (await prisma.event.findMany({
      include: {
        photos: true,
        contractor: true
      }
    })).map(res => {
      return new Event({
        ...res,
        photos: res.photos.map(photo => {
          return {
            ...photo,
            event: null
          }
        }),
        requested_musics: null,
        contractor: {
          ...res.contractor,
          events_held: null
        }
      })
    });
  }

  async save(event: Event): Promise<Event> {
    const evt = await prisma.event.create({
      data: {
        id: event.id,
        name: event.name,
        contractor_id: event.contractor_id,
        date: event.date,
        folder_url: event.folder_url,
        description: event.description,
        is_private: event.is_private
      },
    })

    return this.find(evt.id)
  }

  async find(id: string): Promise<Event> {
    const res = await prisma.event.findUnique({
      where: { id: id },
      include: {
        photos: true,
        contractor: true
      }
    });

    return new Event({
      ...res,
      photos: res.photos.map(photo => {
        return {
          ...photo,
          event: null
        }
      }),
      requested_musics: null,
      contractor: {
        ...res.contractor,
        events_held: null
      }
    })
  }

  async delete(id: string): Promise<Event> {
    const evt = await this.find(id)
    await prisma.event.delete({
      where: { id: id }
    });
    return evt
  }

  async edit(event: Event): Promise<Event> {
    await prisma.event.updateMany({
      where: {
        id: event.id
      },
      data: {
        name: event.name,
        contractor_id: event.contractor_id,
        date: event.date,
        folder_url: event.folder_url,
        description: event.description,
        is_private: event.is_private
      }
    });

    return await this.find(event.id);
  }
}