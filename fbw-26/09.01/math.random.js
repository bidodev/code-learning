//Math.random (JavaScript method)

/*
  1. What it does?
    1.1 Math.random will return a float number between 0 and 1
*/
let generateNumber = Math.random();

console.log("The generated number between 0 and 1 is", generateNumber);

//   2. How to generate a number between (0 and 10)
//console.log(generateNumber * 10);

let maxNumber = 10;
console.log("The number is", Math.floor(generateNumber * maxNumber));

function randomIntFromInterval(min, max) {
  // min and max included
  console.log(max - min + 1);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomIntFromInterval(10, 30));
