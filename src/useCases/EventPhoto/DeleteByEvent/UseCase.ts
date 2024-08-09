import { IEventPhotosRepository } from "../../../repostitories/EventPhotos/IEventPhotosRepository";
import { EventPhoto } from "../../../entities/EventPhoto";

export class UseCase {
  constructor(
    private eventPhotosRepository: IEventPhotosRepository
  ) {}

  async execute(eventId: string): Promise<void> {
    await this.eventPhotosRepository.deleteByEventId(eventId);
  }
}