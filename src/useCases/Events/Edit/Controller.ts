import { UseCase } from "./UseCase";
import { UseCase as EventPhotosUseCase } from "../../EventPhoto/Create/UseCase"
import { UseCase as DeleteEentPhotosByEventUseCase } from "../../EventPhoto/DeleteByEvent/UseCase"
import { UseCase as FindEventsUseCase } from "../../Events/Find/UseCase"
import { Request, Response } from "express";

export class Controller {
  constructor(
    private useCase: UseCase,
    private findEventUseCase: FindEventsUseCase,
    private eventPhotosUseCase: EventPhotosUseCase,
    private deleteEntPhotosByEventUseCase: DeleteEentPhotosByEventUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { name, contractor_id, date, description, is_private } = request.body;

    const evt = {
      id: request.params.id,
      name: name,
      contractor_id: contractor_id,
      date: new Date(date),
      // @ts-ignore
      folder_url: request.files.folder[0].path,
      description: description,
      photos: null,
      is_private: is_private === 'true',
      contractor: null,
      requested_musics: null
    }


    const ev = await this.useCase.execute(evt);
    // @ts-ignore
    const photos = request.files.images.map(function (photo) {
      return {
        id: null,
        photo_url: photo.path,
        event: null,
        event_id: ev.id
      }
    })
    await this.deleteEntPhotosByEventUseCase.execute(ev.id)
    await this.eventPhotosUseCase.execute(photos);
    const event = await this.findEventUseCase.execute(ev.id)
    return response.send(event);
  }
}