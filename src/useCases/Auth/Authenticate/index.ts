import { UseCase } from "./UseCase";
import { Controller} from "./Controller";
import { UsersRepository } from "../../../repostitories/Users/implementations/sqlite/UsersRepository";

const repository = new UsersRepository()

const authenticateUseCase = new UseCase(repository);
const authenticateController = new Controller(authenticateUseCase);

export { authenticateUseCase, authenticateController };