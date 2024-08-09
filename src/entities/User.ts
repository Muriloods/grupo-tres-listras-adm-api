import { v4 } from "uuid";
import { DTO } from "../useCases/Users/DTO";

export class User {
  public readonly id: string;
  public email: string;
  public name: string;
  public password: string;


  constructor(props: DTO) {
    this.id = props.id;
    this.email = props.email;
    this.name = props.name;
    this.password = props.password

    if (!this.id) {
      this.id = v4();
    }
  }
}