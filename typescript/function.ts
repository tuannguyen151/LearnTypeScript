//! Optional Parameters
function greet(firstname: string, lastname?: string): string {
  //the function returns a string
  return "Hello World " + firstname + " " + lastname;
}
console.log(greet("tuan", "nguyen"));

//! Rest Parameters
function addNumbers(...nums: number[]) {
  var i;
  var sum: number = 0;

  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);

//! Default parameters
function calculate_discount(price: number, rate: number = 0.5) {
  var discount = price * rate;
  console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.3);

//! Anonymous Function
var msg = function () {
  return "hello world";
};
console.log(msg());

//! Anonymous function with parameters
var res = function (a: number, b: number) {
  return a * b;
};
console.log(res(12, 2));

//! The Function Constructor
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);

//! Recursion
function factorial(number) {
  if (number <= 0) {
    // termination case
    return 1;
  } else {
    return number * factorial(number - 1); // function invokes itself
  }
}
console.log(factorial(6)); // outputs 720

//! Anonymous Recursive Function
(function () {
  var x = "Hello!!";
  console.log(x);
})(); // the function invokes itself using a pair of parentheses ()

//! Lambda Function or Arrow function
var foo = (x: number) => 10 + x;
console.log(foo(100)); //outputs 110

//! Function Overloads
function disp(x: any, y?: any): void {
  console.log(x);
  console.log(y);
}
disp("abc");
disp(1, "xyz");
