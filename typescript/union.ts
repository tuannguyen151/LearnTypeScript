//! Union Type Variable
let val: string | number = 12;
console.log("numeric value of val " + val);
val = "This is a string";
console.log("string value of val " + val);

//! Union Type and function parameter
function disp2(name: string | string[]) {
  if (typeof name == "string") {
    console.log(name);
  } else {
    var i;

    for (i = 0; i < name.length; i++) {
      console.log(name[i]);
    }
  }
}
disp2("mark");
console.log("Printing names array....");
disp2(["Mark", "Tom", "Mary", "John"]);
