import { IUsersRepository } from "../../../repostitories/Users/IUsersRepository";
import { DTO } from "../DTO";
import jwt from "jsonwebtoken";
import bcrypt = require("bcrypt");
import { UnauthorizedError } from "../../../helpers/api-errors";
export class UseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: DTO): Promise<any> {
    const user = await this.usersRepository.findByEmail(data.email);

    if (!user) {
      throw new UnauthorizedError("Email ou senha inválidas!")
    }

    const correctPass = await bcrypt.compare(data.password, user.password);

    if (!correctPass) {
      throw new UnauthorizedError("Email ou senha inválidas!")
    }

    const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: "8h"});
    const {password, ...usr } = user;

    return {
      ...usr,
      token: token
    };
  }
}