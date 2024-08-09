import { IContractorsRepository } from "../../../repostitories/Contractors/IContractorsRepository";
import { Contractor } from "../../../entities/Contractor";

export class UseCase {
  constructor(
    private contractorsRepository: IContractorsRepository
  ) {}

  async execute(id: string): Promise<Contractor> {
    return await this.contractorsRepository.find(id);
  }
}