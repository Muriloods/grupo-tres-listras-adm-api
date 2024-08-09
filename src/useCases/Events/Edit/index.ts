import { UseCase } from "./UseCase";
import { UseCase as CreateEventPhotosUseCase } from "../../EventPhoto/Create/UseCase";
import { UseCase as FindEventsUseCase } from "../Find/UseCase";
import { UseCase as DeleteEventPhotosUseCase } from "../../EventPhoto/DeleteByEvent/UseCase";
import { Controller} from "./Controller";
import { EventsRepository } from "../../../repostitories/Events/implementations/sqlite/EventsRepository";
import { EventPhotoRepository } from "../../../repostitories/EventPhotos/implementations/sqlite/EventPhotoRepository";

const repository = new EventsRepository()
const eventPhotoRepository = new EventPhotoRepository()


const editEventsUseCase = new UseCase(repository);
const createEventsPhotosUseCase = new CreateEventPhotosUseCase(eventPhotoRepository);
const deleteEventsPhtUseCase = new DeleteEventPhotosUseCase(eventPhotoRepository);
const findEventsUseCase = new FindEventsUseCase(repository);

const editEventsUseCaseController = new Controller(editEventsUseCase, findEventsUseCase, createEventsPhotosUseCase, deleteEventsPhtUseCase);


export { editEventsUseCase, editEventsUseCaseController };