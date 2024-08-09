import { IEventsRepository } from "../../../repostitories/Events/IEventsRepository";
import { DTO } from "../DTO";
import { Event } from "../../../entities/Event";

export class UseCase {
  constructor(
    private eventRepository: IEventsRepository
  ) {}

  async execute(data: DTO): Promise<Event> {
    const event = new Event(data);
    return await this.eventRepository.edit(event);
  }
}