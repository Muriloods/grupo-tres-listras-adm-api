import { UseCase } from "./UseCase";
import { Controller } from "./Controller";
import { ContractorsRepository } from "../../../repostitories/Contractors/implementations/sqlite/ContractorsRepository";

const repository = new ContractorsRepository()

const listContractorsUseCase = new UseCase(repository);
const listContractorsController = new Controller(listContractorsUseCase);

export { listContractorsUseCase, listContractorsController };