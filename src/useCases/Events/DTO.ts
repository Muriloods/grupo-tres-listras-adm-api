import { DTO as MusicRequestDTO } from "../MusicRequests/DTO";
import { DTO as ContractorDTO} from "../Contractors/DTO";
import { DTO as EventPhotoDTO} from "../EventPhoto/DTO";

export interface DTO {
  id: string | null,
  name: string;
  contractor: ContractorDTO | null;
  contractor_id: string;
  date: Date;
  folder_url: string;
  description: string;
  photos: EventPhotoDTO[] | null;
  is_private: boolean;
  requested_musics: MusicRequestDTO[] | null
}