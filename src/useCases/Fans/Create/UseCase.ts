import { IFansRepository } from "../../../repostitories/Fans/IFansRepository";
import { DTO } from "../DTO";
import { Fan } from "../../../entities/Fan";

export class UseCase {
  constructor(
    private fansRepository: IFansRepository
  ) {}

  async execute(data: DTO): Promise<Fan> {
    const fan = new Fan(data);
    let existingFan: Fan | null = null;
    if (!fan.instagram) {
      existingFan = await this.fansRepository.findByEmail(fan.email)
    } else if (!fan.email) {
      existingFan = await this.fansRepository.findByInstagram(fan.instagram)
    }
    if (existingFan) {
      existingFan.name = fan.name ?? existingFan.name;
      existingFan.email = fan.email ?? existingFan.email;
      existingFan.instagram = fan.instagram ?? existingFan.instagram;

      await this.fansRepository.edit(existingFan);
      return existingFan;
    }

    return await this.fansRepository.save(fan);
  }
}