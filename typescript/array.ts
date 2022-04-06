//! Syntax
// An array declaration allocates sequential memory blocks.
var array_string: string[] = ["1", "2", "3"];
var array_any: any[] = ["1", 2, "3"]; // var array_any = ["1", 2, "3"];
var array_number: number[] = [1, 2, 3];
var array_multi: number[][][] = [
  [[1, 2, 3]],
  [[4, 5, 6]],
  [[7, 8, 9]],
  [[10, 11, 12]],
]; // Declaring a Two-Dimensional array

array_string.push("4");
array_any.push(4);
array_number.push(4);

console.log("array_string", array_string);
console.log("array_any", array_any);
console.log("array_number", array_number);
console.log("array_multi", array_multi);
