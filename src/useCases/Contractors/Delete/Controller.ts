import { UseCase } from "./UseCase";
import { Request, Response } from "express";

export class Controller {
  constructor(
    private useCase: UseCase
  ) {}

  async handle(request: Request, response: Response) {
    const contractor = await this.useCase.execute(request.params.id);
    return response.status(201).send(contractor);
  }
}