import { IContractorsRepository } from "../../../repostitories/Contractors/IContractorsRepository";
import { Contractor } from "../../../entities/Contractor";
import { DTO } from "../DTO";

export class UseCase {
  constructor(
    private contractorsRepository: IContractorsRepository
  ) {}

  async execute(data: DTO): Promise<Contractor> {
    const contractor = new Contractor(data);
    return await this.contractorsRepository.edit(contractor);
  }
}