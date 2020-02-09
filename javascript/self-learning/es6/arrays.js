/**
 * It is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable.
 * Using the const declaration only prevents reassignment of the variable identifier.
 */

// "use strict";
// const s = [5, 6, 7];
// s = [1, 2, 3]; // throws error, trying to assign a const
// s[2] = 45; // works just as it would with an array declared with var or let
// console.log(s); // returns [5, 6, 45]

/**
 * An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.
 */

const s = [5, 7, 2];
function editInPlace() {
  ("use strict");
  s.unshift(s.pop());
  console.log(s);
}
editInPlace();
