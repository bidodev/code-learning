/* 
  Look at the unit tests for validating a pin. Create a function named "_validPin_" that fulfills the requirements of the tests.
*/

//function to check if the number is even..
const validPin = (number) => {
  let array = number.split("");
  let newNumbers = [];
  array.forEach((element) => {
    newNumbers.push(parseInt(element));
  });

  //check if the pin is even
  const isEven = number % 2 == 0;
  //console.log("TCL: validPin -> isEven", isEven);

  //check if the pin has the allowed length
  const allowedLength = number.length < 5;
  //console.log("TCL: validPin -> allowedLength", allowedLength);

  //check if we have two differ numbers in the array.
  const hasDiffer = Math.max(...newNumbers) !== Math.min(...newNumbers);
  //console.log("TCL: validPin -> hasDiffer", hasDiffer);

  //check if the sum of all numbers isn't higher than 5
  const result =
    newNumbers.reduce(function(acc, current) {
      return acc + current;
    }) > 5;

  //console.log("TCL: validPin -> result", result);
  return isEven && allowedLength && hasDiffer && result;
};

console.log(validPin("2224")); //→ true
console.log(validPin("1235")); // → false // last number should be even
console.log(validPin("wwww")); //→ false // should only consist of numbers
console.log(validPin("12345")); // → false // should be 4 digits, not 5
console.log(validPin("2222")); // → false // should have at least 2 different digits
console.log(validPin("1000")); //→ false // does not add up to at least 5
console.log(validPin("2224")); // → true

/**
 * let array = [1, 2, 1, 1, 1];

//1. forEach()
let hasDiffer = false;

for (let index = 0; index < array.length; index++) {
  if (array[0] !== array[index]) {
    hasDiffer = true;
    break;
  }
}

console.log(hasDiffer);
//2. includes()

 */
