import { UseCase } from "./UseCase";
import { Controller} from "./Controller";
import { UsersRepository } from "../../../repostitories/Users/implementations/sqlite/UsersRepository";

const repository = new UsersRepository()

const createUsersUseCase = new UseCase(repository);
const createUsersUseCaseController = new Controller(createUsersUseCase);

export { createUsersUseCase, createUsersUseCaseController };