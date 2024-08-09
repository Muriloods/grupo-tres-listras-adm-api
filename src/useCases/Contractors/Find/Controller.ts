import { UseCase } from "./UseCase";
import { Request, Response } from "express";
import { Contractor } from "../../../entities/Contractor";
import { DTO as EventsDTO } from "../../Events/DTO";

export class Controller {
  constructor(
    private useCase: UseCase
  ) {}

  async handle(request: Request, response: Response) {
    const contractor = await this.useCase.execute(request.params.id);
    return response.send(contractor);
  }
}