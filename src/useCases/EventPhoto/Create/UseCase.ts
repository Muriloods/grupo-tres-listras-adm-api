import { IEventPhotosRepository } from "../../../repostitories/EventPhotos/IEventPhotosRepository";
import { DTO } from "../DTO";
import { EventPhoto } from "../../../entities/EventPhoto";

export class UseCase {
  constructor(
    private eventPhotosRepository: IEventPhotosRepository
  ) {}

  async execute(data: DTO[]): Promise<void> {
    const photos = data.map(photo => {
      return new EventPhoto(photo);
    })
    await this.eventPhotosRepository.saveMany(photos);
  }
}