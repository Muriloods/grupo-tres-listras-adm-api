import { EventPhoto } from "../../entities/EventPhoto";
export interface IEventPhotosRepository {
  saveMany(photos: EventPhoto[]): Promise<void>;
  deleteByEventId(eventId: string): Promise<void>;
}