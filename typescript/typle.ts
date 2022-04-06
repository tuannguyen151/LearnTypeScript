//! Tuples store a collection of values of varied types
const mytuple = [10, "Hello", "World", "typeScript"]; //create a  tuple
console.log("Tuple value at index 0 " + mytuple[0]);

//! Update a tuple element
mytuple[0] = 121;
console.log("Tuple value at index 0 changed to   " + mytuple[0]);

//! Destructuring a Tuple
var [b, c] = mytuple;
console.log(b);
console.log(c);
