import { UseCase } from "./UseCase";
import { Controller} from "./Controller";
import { ContractorsRepository } from "../../../repostitories/Contractors/implementations/sqlite/ContractorsRepository";

const repository = new ContractorsRepository()

const createContractorUseCase = new UseCase(repository);
const createContractorController = new Controller(createContractorUseCase);

export { createContractorUseCase, createContractorController };