import { Event } from "../../entities/Event";
export interface IEventsRepository {
  list(): Promise<Event[]>;
  save(contractor: Event): Promise<Event>;
  edit(contractor: Event): Promise<Event>;
  delete(id: string): Promise<Event>;
  find(id: string): Promise<Event>;
}