import { IEventPhotosRepository } from "../../IEventPhotosRepository";
import { EventPhoto } from "../../../../entities/EventPhoto";
import prisma from "../../../../../prisma/client";
export class EventPhotoRepository implements IEventPhotosRepository{

  async saveMany(photos: EventPhoto[]): Promise<void> {
    const data = photos.map(photo => {
      return {
        id: photo.id,
        event_id: photo.event_id,
        photo_url: photo.photo_url
      }
    })
    const cont = await prisma.eventPhoto.createMany({ data })
  }

  async deleteByEventId(eventId:string): Promise<void> {
    await prisma.eventPhoto.deleteMany({
      where: { event_id: eventId }
    });
  }
}