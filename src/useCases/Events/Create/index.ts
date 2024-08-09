import { UseCase } from "./UseCase";
import { UseCase as CreateEventPhotosUseCase } from "../../EventPhoto/Create/UseCase";
import { UseCase as FindEventsUseCase } from "../Find/UseCase";
import { Controller} from "./Controller";
import { EventsRepository } from "../../../repostitories/Events/implementations/sqlite/EventsRepository";
import { EventPhotoRepository } from "../../../repostitories/EventPhotos/implementations/sqlite/EventPhotoRepository";

const repository = new EventsRepository()
const eventPhotoRepository = new EventPhotoRepository()


const createEventsUseCase = new UseCase(repository);
const createEventsPhotosUseCase = new CreateEventPhotosUseCase(eventPhotoRepository);
const findEventsUseCase = new FindEventsUseCase(repository);

const createEventsUseCaseController = new Controller(createEventsUseCase, findEventsUseCase, createEventsPhotosUseCase);


export { createEventsUseCase, createEventsUseCaseController };