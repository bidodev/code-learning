// 1. Multiply - Function Declaration
// Create a function that multiples a number by another number.
function multiply(numberOne, numberTwo) {
  const message = `The product is: `;

  return `${message} ${numberOne * numberTwo}`;
}
console.log(multiply(2, 3));

// 2. Multiply - Function Declarations as Values
// Rework the syntax of the above function so that the function declaration is stored as a value.
const result = function(numberOne, numberTwo) {
  const message = `The product is: `;
  return `${message} ${numberOne * numberTwo}`;
};
console.log(result(3, 5));

// 3. Multiply - Arrow Function
// Rework the syntax of the function declaration so that is uses the arrow function shorthand.
const shortMultiply = (numOne, numTwo) => `The product is: ` + numOne * numTwo;
console.log(shortMultiply(10, 20));

// 4. Declarations
// Create functions (using all three declarations) to check the remainder of division given two numbers.
//function expresion declaration.

function remainderDiv(numberOne, numberTwo) {
  return `The remainder of the division is ${numberOne % numberTwo}`;
}
console.log(remainderDiv(10, 2));

//function declarion and saved into a varrible.
const resultDiv = function(numberOne, numberTwo) {
  return `The remainder of the division is ${numberOne % numberTwo}`;
};

console.log(resultDiv(20, 3));

// short arrow function
const shortDiv = (numberOne, numberTwo) =>
  `The remainder of the division is ` + (numberOne % numberTwo);
console.log(shortDiv(10, 20));
