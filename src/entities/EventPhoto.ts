import { v4 } from "uuid";
import { Event } from "./Event";
import { DTO } from "../useCases/EventPhoto/DTO";

export class EventPhoto {
  public readonly id: string;
  public event: Event;
  public event_id: string;
  public photo_url: string;

  constructor(props: DTO) {
    Object.assign(this, props)

    if (!this.id) {
      this.id = v4();
    }
  }
}