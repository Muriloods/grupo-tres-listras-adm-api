import { v4 } from "uuid";
import { DTO } from "../useCases/Fans/DTO";

export class Fan {
  public readonly id: string;
  public name: string | null;
  public email: string | null;
  public instagram: string | null;
  public is_follower: boolean;


  constructor(props: DTO) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.instagram = props.instagram;
    this.is_follower = props.is_follower;

    if (!this.id) {
      this.id = v4();
    }
  }
}