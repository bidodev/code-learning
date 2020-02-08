/**
 * Recursion is the concept that a function can be expressed in terms of itself.
 * To help understand this, start by thinking about the following task:
 *
 * Multiply the elements from 0 to n inclusive in an array to create the product of those elements. Using a for loop, you could do this:
 */
// function multiply(arr, n) {
//   let product = arr[0];
//   //console.log(arr);

//   for (let i = 1; i <= n; i++) {
//     product = product * arr[i];
//     //console.log("DEBUG: multiply -> product", product);
//   }
//   return product;
// }

/**
 * However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n].
 * That means you can rewrite multiply in terms of itself and never need to use a loop.
 */

function multiply(arr, n) {
  if (n <= 0) {
    return arr[0];
  } else {
    return multiply(arr, n - 1) * arr[n];
  }
}
console.log(multiply([2, 2, 2], 2));

let x = function() {
  x();
};

let add = function(n) {
  if (n <= 0) {
    return 0;
  } else {
    return n + add(n - 1);
  }
};
console.log(add(3));

function sum(arr, n) {
  if (n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n - 1) + arr[n];
  }
}

console.log(sum([2, 5, 6], 2));
