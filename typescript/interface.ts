//! Interface and Objects
interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

const customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => {
    return "Hi there";
  },
};

console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

const employee: IPerson = {
  firstName: "Jim",
  lastName: "Blakes",
  sayHi: (): string => {
    return "Hello!!!";
  },
};

console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);

//! Union Type and Interface
interface RunOptions {
  program: string;
  commandline: string[] | string | (() => string);
}

//commandline as string
let options: RunOptions = { program: "test1", commandline: "Hello" };
console.log(options.commandline);

//commandline as a string array
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);

//commandline as a function expression
options = {
  program: "test1",
  commandline: () => {
    return "**Hello World**";
  },
};

const fn: any = options.commandline;
console.log(fn());

//! Interfaces and Arrays
interface namelist {
  [index: number]: string;
}

const list2: namelist = ["John", "Bran"];
interface ages {
  [index: string]: number;
}

const agelist: ages = {};
agelist["John"] = 15;

//! Interfaces and Inheritance
interface Person {
  age: number;
}

interface Musician extends Person {
  instrument: string;
}

const drummer: Musician = <Musician>{};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument);

//! Multiple Interface Inheritance
interface IParent1 {
  v1: number;
}

interface IParent2 {
  v2: number;
}

interface Child extends IParent1, IParent2 {}
let Iobj: Child;
Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + Iobj.v1 + " value 2: " + Iobj.v2);
