//! Inheritance can be classified as:
//- Single − Every class can at the most extend from one parent class
//- Multiple − A class can inherit from multiple classes. TypeScript doesn’t support multiple inheritance.
//- Multi-level − The following example shows how multi-level inheritance works.

//! Declaring a class
class Car {
  //variable
  public engine: string;
  private varPrivate: string = "private";
  protected varProtected: string = "protected";

  //constructor
  constructor(engine: string) {
    this.engine = engine;
  }

  //method
  disp(): void {
    console.log("Public Engine = " + this.engine);
    console.log("Private varPrivate = ", this.varPrivate);
    console.log("Protected varProtected = ", this.varProtected);
  }
}

//! object = Instantiating a class
let obj = new Car("Engine 1");

//! Accessing Attributes and Functions
console.log(obj.engine);
obj.disp();

//! Class Inheritance
class Mer extends Car {
  name: string;

  constructor(engine: string, name: string) {
    super(engine);

    this.name = name;
  }

  //! Method Overriding
  disp(): void {
    super.disp();
    console.log("Name is  :   " + this.name);
  }

  // A class can control the visibility of its data members to members of other classes. This capability is termed as Data Hiding or Encapsulation.
  test_encapsulation(): void {
    console.log("Public Engine = " + this.engine);
    console.log("Protected varProtected = ", this.varProtected);
  }
}

let mer = new Mer("V10", "Mer");
mer.disp();
//! The instanceof operator returns true if the object belongs to the class.
console.log("mer is an instance of Car " + (mer instanceof Car));
console.log("mer is an instance of Mer " + (mer instanceof Mer));





//! Static is data of class
class DemoStatic {
  // A static variable retains its values till the program finishes execution.
  // Static members are referenced by the class name.
  static num: number = 10;

  static static_disp(): void {
    // this === DemoStatic
    console.log("Call static method: static variable = ", this.num);
  }
}
DemoStatic.static_disp();





//! Classes and Interfaces
interface ILoan {
  interest: number;
}

class AgriLoan implements ILoan {
  interest: number;
  rebate: number;

  constructor(interest: number, rebate: number) {
    this.interest = interest;
    this.rebate = rebate;
  }
}

const implement = new AgriLoan(10, 1);
console.log(
  "Interest is : " + implement.interest + " Rebate is : " + implement.rebate
);
