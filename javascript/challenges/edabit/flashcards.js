/**
 * Flash Cards
 * Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number,
 * an operator symbol, and another number. Return the mathematical result of that expression.
 * There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division).
 * If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. For division,
 * round to the hundredths place. So [10, "/", 3] should return 3.33.
 * Examples
 * flash([3, "x", 7]) ➞ 21
 * flash([5, "+", 7]) ➞ 12
 * flash([10, "-", 9]) ➞ 1
 * flash([10, "/", 0]) ➞ undefined
 * flash([10, "/", 3]) ➞ 3.33
 * Notes
 * Flash cards contain only zero or positive numbers.
 */

const flash = (arr) => {
  //first we have to get the two numbers and convert them into a float.
  const FIRST_NUMBER = parseFloat(arr[0]);
  const LAST_NUMBER = parseFloat(arr[2]);
  const MATH_OPERATOR = arr[1];

  //basic arithmetic operations
  const SUBTRACTION = FIRST_NUMBER - LAST_NUMBER;
  const ADDITION = FIRST_NUMBER + LAST_NUMBER;
  const MULTIPLICATION = FIRST_NUMBER * LAST_NUMBER;
  const DIVISION = FIRST_NUMBER / LAST_NUMBER;
  const MODULUS = FIRST_NUMBER % LAST_NUMBER;

  //conditions to validate.
  if (Math.sign(FIRST_NUMBER, LAST_NUMBER) == -1) {
    return `Please insert a positive number.`;
  } else if (LAST_NUMBER === 0) {
    return undefined;
  }

  //only continue executing the code if all the conditions were already valuate as true.
  else {
    switch (MATH_OPERATOR) {
      case "-":
        return SUBTRACTION;
      case "+":
        return ADDITION;
      case "x":
        return MULTIPLICATION;
      case "/":
        let result = 0;
        if (MODULUS !== 0) {
          result = DIVISION.toFixed(2);
        } else {
          result = DIVISION;
        }
        return result;
      default:
        return `Invalid math operator..`;
    }
  }
};

console.log(flash([0, "/", 3])); //➞ 3.33
