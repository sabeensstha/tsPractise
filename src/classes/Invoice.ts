import { HasFormatter } from "../Interfaces/HasFormatter";

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes Rs. ${this.amount} for ${this.details}`;
  }
}
