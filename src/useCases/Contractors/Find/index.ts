import { UseCase } from "./UseCase";
import { Controller } from "./Controller";
import { ContractorsRepository } from "../../../repostitories/Contractors/implementations/sqlite/ContractorsRepository";

const repository = new ContractorsRepository()

const findContractorsUseCase = new UseCase(repository);
const findContractorsController = new Controller(findContractorsUseCase);

export { findContractorsUseCase, findContractorsController };