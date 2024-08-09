import { UseCase } from "./UseCase";
import { Controller } from "./Controller";
import { ContractorsRepository } from "../../../repostitories/Contractors/implementations/sqlite/ContractorsRepository";

const repository = new ContractorsRepository()

const editContractorsUseCase = new UseCase(repository);
const editContractorsController = new Controller(editContractorsUseCase);

export { editContractorsUseCase, editContractorsController };