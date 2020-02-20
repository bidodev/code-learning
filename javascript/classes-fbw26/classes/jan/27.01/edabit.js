// function nextEdge(side1, side2) {
//   return side1 + side2 - 1;
// }
// console.log(nextEdge(8, 10));

// /*
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117
// */

// function lessThan100(a, b) {
//   return a + b < 100 ? true : false;
// }
// console.log(lessThan100(20, 50));

// /*
// Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// */
// const addition = num => num + 1;

// /*
// Create a function that takes two numbers as arguments and return their sum.

// Examples
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
// */

// const checkEquality = (a, b) => typeof a === typeof b;

// console.log(checkEquality(2, 2));

const checkEquality = (a, b) => {
  if (typeof a === typeof b && typeof a === NaN && typeof b === NaN) {
    return true;
  } else {
    return false;
  }
};

console.log(checkEquality(1, true));

console.log(("b" + "a" + +"a" + "a").toLowerCase());

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.5 + 0.1 === 0.6); // true
