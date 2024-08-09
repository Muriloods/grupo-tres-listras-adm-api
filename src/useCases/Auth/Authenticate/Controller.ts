import { UseCase } from "./UseCase";
import { Request, Response } from "express";

export class Controller {
  constructor(
    private useCase: UseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
      const user = await this.useCase.execute({
        email: email,
        password: password
      });
      return response.send(user);
  }
}