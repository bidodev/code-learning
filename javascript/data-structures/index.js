let simpleArray = ["one", 2, "three", 5, false, undefined, null];

// const map = simpleArray.map(value => {
//
//   if (typeof value === "number") {
//     numbersArray.push(value);
//   }
//   return numbersArray;
// });

// console.log(map);
const numbersArray = [];
const trashArray = [];

const myNumbers = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      numbersArray.push(arr[i]);
    } else {
      trashArray.push(arr[i]);
    }
  }
  return numbersArray;
};

console.log(myNumbers(simpleArray));

//complex Array
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];

console.log(complexArray[0]);
