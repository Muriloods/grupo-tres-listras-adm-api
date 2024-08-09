import { UseCase } from "./UseCase";
import { UseCase as DeleteEventPhotoByEventUseCase } from "../../EventPhoto/DeleteByEvent/UseCase";
import { Controller } from "./Controller";
import { EventsRepository } from "../../../repostitories/Events/implementations/sqlite/EventsRepository";
import { EventPhotoRepository } from "../../../repostitories/EventPhotos/implementations/sqlite/EventPhotoRepository";

const repository = new EventsRepository()
const eventPhotoRepository = new EventPhotoRepository()

const deleteEventsUseCase = new UseCase(repository);
const deleteEventPhotoByEventUseCase = new DeleteEventPhotoByEventUseCase(eventPhotoRepository);
const deleteEventsController = new Controller(deleteEventsUseCase, deleteEventPhotoByEventUseCase);

export { deleteEventsUseCase, deleteEventsController };