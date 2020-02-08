/*
Pie. Create a function that determines whether 
or not it’s possible to split a pie fairly given these three parameters:
Total number of slices.
Number of recipients.
How many slices each person gets.
Examples:
equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
equalSlices(8, 3, 2) ➞ true
equalSlices(8, 3, 3) ➞ false
equalSlices(24, 12, 2) ➞ true
*/

const equalSlices = (slices, people, pieces) => {
  let result = people * pieces;

  if (result > slices) {
    return false;
  } else {
    return true;
  }
};
console.log(equalSlices(8, 3, 3));

/*
O Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
Notes:
Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples:
XO(“ooxx”) ➞ true
XO(“xooxx”) ➞ false
XO(“ooxXm”) ➞ true (case insensitive)
XO(“zpzpzpp”) ➞ true (returns true if no x and o)
XO(“zzoo”) ➞ false

*/
function checkXo(str) {
  let myArrStr = str.toLowerCase().split("");
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < myArrStr.length; i++) {
    if (myArrStr[i] === "x") {
      xCount++;
    }
    if (myArrStr[i] === "o") {
      oCount++;
    }
  }
  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
}

console.log(checkXo("ooxXm"));

// Validate Email. Create a function that takes a string,
// checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.
