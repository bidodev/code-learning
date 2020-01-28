// Create a function  average which accepts any amount of numbers and returns their mean average.

//using .map
const average = (...array) => {
  let sum = 0;
  array.map(value => (sum += value));
  return sum / array.length;
};

console.log(average(25, 25, 20));

//using reduce
let numbers = [25, 50, 25];

const reducer = (accumulator, currentValue) =>
  (accumulator + currentValue) / numbers.length;

console.log(numbers.reduce(reducer));

// //Old style..
// const average = (...args) => {
//   let array = args;

//   let sum = 0;
//   let average = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   //average = sum / numbers of elements.
//   average = sum / array.length;
//   return average;
// };

// console.log(average(4, 5, 5));
