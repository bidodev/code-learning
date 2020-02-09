// const map = simpleArray.map(value => {
//
//   if (typeof value === "number") {
//     numbersArray.push(value);
//   }
//   return numbersArray;
// });

// console.log(map);
const numbersArray = [];

//with for

// const myNumbers = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//       numbersArray.push(arr[i]);
//     }
//   }
//   return numbersArray;
// };
let arr = ["one", 2, "three", 5, false, undefined, null];

// with .map
const myNumbers = arr.map(value => {
  return typeof value === "number" ? value * 2 : value;
});

console.log(myNumbers);

// const myFunc = arg => {

//   arg.map(value => {
//     return typeof value === "number" ? value * 2 : value;
//   });
// };

// console.log(myFunc(simpleArr));

// //complex Array
// let complexArray = [
//   [
//     {
//       one: 1,
//       two: 2
//     },
//     {
//       three: 3,
//       four: 4
//     }
//   ],
//   [
//     {
//       a: "a",
//       b: "b"
//     },
//     {
//       c: "c",
//       d: "d"
//     }
//   ]
// ];

// console.log(complexArray[0]);
