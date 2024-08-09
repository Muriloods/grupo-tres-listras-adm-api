import { v4 } from "uuid";
import { Contractor } from "./Contractor";
import { EventPhoto } from "./EventPhoto";
import { MusicRequest } from "./MusicRequest";
import { DTO } from "../useCases/Events/DTO";

export class Event {
  public readonly id: string | null;
  public name: string;
  public contractor: Contractor | null;
  public contractor_id: string;
  public date: Date;
  public folder_url: string;
  public description: string;
  public photos: EventPhoto[] | null;
  public is_private: boolean;
  public requested_musics: MusicRequest[] | null

  constructor(props: DTO) {
    Object.assign(this, props)

    if (!this.id) {
      this.id = v4();
    }
  }
}