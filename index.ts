import { matches } from "z";

const person = { name: "Maria" };

matches(person)(
  (x = { name: "John" }) => console.log("John you are not welcome!"),
  (x: any) => console.log(`Hey ${x.name}, you are welcome!`)
);
