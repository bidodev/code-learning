// // const numbers = [`string`, `minha`, `que`, `faz`, `sofrer`];

// // //using a sigle loop
// // // sum = 0;
// // // for (n of numbers) {
// // //   sum += n;
// // // }
// // // console.log(sum); //print 5

// // //using .reduce()
// // const otherSum = numbers.reduce((total, currentValue) => {
// //   return currentValue + total;
// // }, `minha`);

// // console.log(otherSum); //print 5

// // // The reduce() method reduces the array to a single value.
// // // The reduce() method executes a provided function for each value of the array (from left-to-right).
// // // The return value of the function is stored in an accumulator (result/total).
// // // Note: reduce() does not execute the function for array elements without values.
// // // Note: this method does not change the original array

// //array.reduce()

// const numbersArr = [1, 3, 4, 6, 7];
// const reducer = (acc, currentValue) => acc + currentValue;

// console.log(numbersArr.reduce(reducer, 10));

// const print = str => console.log(str);

// function yellow(val, val2) {
//   return val * val2;
// }

// console.log(yellow(10, 20));

// const aliPets = ["Juca", "Jose", "Pedro"];

// const pink = (name, age, array) =>
//   console.log(`${name} has ${age} and his pets are called ${array[0]}`);

// pink("Ali", 20, aliPets);

const greeting = (name, adress, age, place) => {
  age += 20;
  name += `.`;
  place += `-DE`;
  return `Hey ${name} You live at ${adress}, your age is ${age} years old and your old place is ${place}`;
};

console.log(greeting(`Juca`, `berlin`, 20, `Modena`));
