//  Print Exponential Values

// Write a function that accepts two numbers and validate that they are numbers.
const isNum = (numOne, numTwo) => {
  if (isNaN(numOne || numTwo)) {
    console.log("You have to insert a number");
  } else {
    return true;
  }
};

// console.log(isNum(2));

// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.
const exponential = (numOne, numTwo) => {
  let result = 0;
  let values = "";

  if (isNum(numOne, numTwo)) {
    for (let i = 1; i <= numTwo; i++) {
      result = numOne ** i;
      values += `${result} `;
    }
    return values;
  }
};

console.log(exponential(2, 6));

// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value.
// Reassign the variable within the function and print “My favorite fruit is: x”.
let fruit = "Banana";

function printFavoriteFruit() {
  fruit = "Uva";
  console.log(`My favorite fruit is ${fruit}`);
}

printFavoriteFruit("Jaca");

// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters.
// The second parameter defines how many times the first number should be multiplied by itself.
// Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.

function exponent(starterNum, numTwo) {
  let result = 0;

  for (let i = 0; i <= numTwo; i++) {
    result += starterNum * starterNum;
  }
  return result;
}

console.log(exponent(2, 5));

//spre
