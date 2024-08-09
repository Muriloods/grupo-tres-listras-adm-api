import { IEventsRepository } from "../../../repostitories/Events/IEventsRepository";
import { Event } from "../../../entities/Event";

export class UseCase {
  constructor(
    private eventsRepository: IEventsRepository
  ) {}

  async execute(id: string): Promise<Event> {
    return await this.eventsRepository.find(id);
  }
}