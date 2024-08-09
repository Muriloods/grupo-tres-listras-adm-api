import { UseCase } from "./UseCase";
import { UseCase as DeleteEventPhotosByEventeUseCase } from '../../EventPhoto/DeleteByEvent/UseCase'
import { Request, Response } from "express";

export class Controller {
  constructor(
    private useCase: UseCase,
    private deleteEventPhotosByEventeUseCase: DeleteEventPhotosByEventeUseCase
  ) {}

  async handle(request: Request, response: Response) {
    await this.deleteEventPhotosByEventeUseCase.execute(request.params.id);
    const event = await this.useCase.execute(request.params.id);
    return response.send(event);
  }
}