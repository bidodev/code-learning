// Open your browser console.
let output =
  "Get this to log once in the browser console and twice in the freeCodeCamp console";
console.log(output);

// Use console.clear() on the next line to clear the browser console.
console.clear();

// Use console.log() to print the output variable.
console.log(output);

// Check the two consoles to see the difference. The freeCodeCamp console should have printed the variable twice, once for each test of this challenge. The browser console should only print the variable once because you cleared it first.

/**
 * Debugging: Use typeof to Check the Type of a Variable
 * You can use typeof to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.

 Here are some examples using typeof:
 */
console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"

/**
 * JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.
 */

let myArray = [1, 2, 3];

const arraySum = myArray.reduce((previous, current) => {
  return previous + current;
});

console.log(`Sum of array values is: ${arraySum}`);

var arr = [1, 2, 3];

var mapped = arr.filter(function(elem) {
  return elem * 10;
});

console.log(mapped); // it genrate new array
