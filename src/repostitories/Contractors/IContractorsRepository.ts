import { Contractor } from "../../entities/Contractor";
export interface IContractorsRepository {
  list(): Promise<Contractor[]>;
  save(contractor: Contractor): Promise<Contractor>;
  edit(contractor: Contractor): Promise<Contractor>;
  delete(id: string): Promise<Contractor>;
  find(id: string): Promise<Contractor>;
}