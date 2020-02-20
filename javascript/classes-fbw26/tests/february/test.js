/* 
  Look at the unit tests for validating a pin. Create a function named "_validPin_" that fulfills the requirements of the tests.
*/
const validPin = (number) => {
  //check if the pin has the allowed length
  if (number.length !== 4) {
    return false;
  }

  //check if the pin is even
  if (number % 2 !== 0) {
    return false;
  }

  //split the original string of numbers into an array of string(numbers)
  let strNumbers = number.split("");

  //convert the string(numbers array) into an int array of numbers
  let intNumbers = strNumbers.map((element) => {
    return parseInt(element);
  });

  //check if we have two differ numbers in the array.
  let hasDiffer = intNumbers.some((element) => {
    return element != intNumbers[element + 1];
  });

  //check if the sum of all numbers isn't higher than 5
  const addUp =
    intNumbers.reduce(function(acc, current) {
      return acc + current;
    }) > 5;

  return hasDiffer && addUp;
};

console.log(validPin("1234")); //→ true
// console.log(validPin("wwww")); //→ false // should only consist of numbers
// console.log(validPin("12345")); // → false // should be 4 digits, not 5
// console.log(validPin("2222")); // → false // should have at least 2 different digits
// console.log(validPin("1000")); //→ false // does not add up to at least 5
// console.log(validPin("2224")); // → true
// console.log(validPin("224")); // → false
