import { IEventsRepository } from "../../../repostitories/Events/IEventsRepository";
import { Event } from "../../../entities/Event";

export class UseCase {
  constructor(
    private eventsRepository: IEventsRepository
  ) {}

  async execute(): Promise<Event[]> {
    return await this.eventsRepository.list();
  }
}