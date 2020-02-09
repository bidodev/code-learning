/**
 * We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array.
 * The spread operator makes this syntax much better to read and maintain.
 */

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

console.log(maximus);

//copy arrays
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // change this line

console.log(arr2);
