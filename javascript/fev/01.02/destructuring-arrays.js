// let a = 8,
//   b = 6;

// [a, b] = [b, a];

// console.log(a, b);

//
// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b); // 1, 2
// console.log(arr); // [3, 4, 5, 7]

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  "use strict";
  // change code below this line

  const [a, b, c, ...arr] = list; // change this

  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
