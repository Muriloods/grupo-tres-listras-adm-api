import { UseCase } from "./UseCase";
import { Controller } from "./Controller";
import { ContractorsRepository } from "../../../repostitories/Contractors/implementations/sqlite/ContractorsRepository";

const repository = new ContractorsRepository()

const deleteContractorsUseCase = new UseCase(repository);
const deleteContractorsController = new Controller(deleteContractorsUseCase);

export { deleteContractorsUseCase, deleteContractorsController };