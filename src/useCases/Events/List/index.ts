import { UseCase } from "./UseCase";
import { Controller } from "./Controller";
import { EventsRepository } from "../../../repostitories/Events/implementations/sqlite/EventsRepository";

const repository = new EventsRepository()

const listEventsUseCase = new UseCase(repository);
const listEventsController = new Controller(listEventsUseCase);

export { listEventsUseCase, listEventsController };