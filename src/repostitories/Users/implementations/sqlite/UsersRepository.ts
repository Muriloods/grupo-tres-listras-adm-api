import { IUsersRepository } from "../../IUsersRepository";
import { User } from "../../../../entities/User";
import prisma from "../../../../../prisma/client";

export class UsersRepository implements IUsersRepository{
  async save(user: User): Promise<User> {
    const usr =  await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      }
    });

    return new User(usr);
  }

  async findByEmail(email: string): Promise<User | null> {
    const use = await prisma.user.findUnique({ where: { email } });

    if (!use) {
      return null;
    }
    return new User(use)
  }

  async findById(id: string): Promise<User | null> {
    const use = await prisma.user.findUnique({ where: { id } });

    if (!use) {
      return null;
    }
    return new User(use)
  }
}