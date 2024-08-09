import { DTO as EventsDTO } from "../Events/DTO"
import { Event } from "../../entities/Event";
export interface DTO {
  id: string | null;
  name: string;
  email: string;
  phone: string;
  events_held: EventsDTO[] | null;
  is_commerce: boolean;
}