import { IContractorsRepository } from "../../../repostitories/Contractors/IContractorsRepository";
import { DTO } from "../DTO";
import { Contractor } from "../../../entities/Contractor";

export class UseCase {
  constructor(
    private contractorRepository: IContractorsRepository
  ) {}

  async execute(data: DTO): Promise<Contractor> {
    const contractor = new Contractor(data);
    return await this.contractorRepository.save(contractor);
  }
}