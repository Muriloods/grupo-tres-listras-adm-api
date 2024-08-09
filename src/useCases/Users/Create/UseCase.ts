import { IUsersRepository } from "../../../repostitories/Users/IUsersRepository";
import { DTO } from "../DTO";
import { User } from "../../../entities/User";

export class UseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: DTO): Promise<User> {
    const user = new User(data);
    return await this.usersRepository.save(user);
  }
}