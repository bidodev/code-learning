/**
 * 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
 *
 * Examples:
 * {} ➞ true
 * {a: 1} ➞ false
 */

// function isEmpty(obj) {
//   for (let key in obj) {
//     //console.log("DEBUG: isEmpty -> key", key);
//     if (obj.hasOwnProperty(key)) return false; //if it has the property, means that the object is not empty, therefore we should return false.
//   }
//   return true;
// }
// console.log(isEmpty({})); // Empty Object
// console.log(isEmpty({ a: 1 })); // Not empty Object

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({})); // Empty Object
console.log(isEmpty({ a: 1 })); // Not empty Object
