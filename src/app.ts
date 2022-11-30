
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";
// // interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const me: IsPerson = {
//   name: "sabeen",
//   age: 24,
//   speak(text: string): void{
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("I spent" , amount);
//     return amount;
//   }
// }
// const greetFUnction = (person: IsPerson) => {
//   console.log("hello", person.name);
// }

// greetFUnction(me);

// console.log(me);

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("sabeen", "web work", 250);
// docTwo = new Payment("Nabeen", "plumbing work", 500);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice("Mario", "Work on the mario website", 250);
// const invTwo = new Invoice("Sabeen", "Work on the Sabeen website", 230);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector("form")!;

const classForm = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if(type.value === 'invoice'){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  }
  else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }
  list.render(doc, type.value , "end");

});
