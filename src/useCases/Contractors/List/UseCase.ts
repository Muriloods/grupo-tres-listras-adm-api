import { IContractorsRepository } from "../../../repostitories/Contractors/IContractorsRepository";
import { Contractor } from "../../../entities/Contractor";

export class UseCase {
  constructor(
    private contractorsRepository: IContractorsRepository
  ) {}

  async execute(): Promise<Contractor[]> {
    return await this.contractorsRepository.list();
  }
}