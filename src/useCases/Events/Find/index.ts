import { UseCase } from "./UseCase";
import { Controller } from "./Controller";
import { EventsRepository } from "../../../repostitories/Events/implementations/sqlite/EventsRepository";

const repository = new EventsRepository()

const findEventsUseCase = new UseCase(repository);
const findEventsController = new Controller(findEventsUseCase);

export { findEventsUseCase, findEventsController };