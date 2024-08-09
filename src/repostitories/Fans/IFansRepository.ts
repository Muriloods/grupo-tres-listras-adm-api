import { Fan } from "../../entities/Fan";
export interface IFansRepository {
  index(): Promise<Fan[]>;
  save(fan: Fan): Promise<Fan>;
  edit(fan: Fan): Promise<Fan>;
  findByEmail(email: string): Promise<Fan>;
  findByInstagram(insta: string): Promise<Fan>;
}