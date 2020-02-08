/**
 * Random numbers are useful for creating random behavior.
 * JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive).
 * Thus Math.random() can return a 0 but never quite return a 1
 *
 * Note
 * Like Storing Values with the Equal Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.
 */
function randomFraction() {
  // Only change code below this line.

  return Math.random();

  // Only change code above this line.
}
console.log(randomFraction());

//randomWholeNum
function randomWholeNum(num) {
  // Only change code below this line.

  return Math.floor(Math.random() * num);
}
console.log(randomWholeNum(10));

//Generate Random Whole Numbers within a Range
// Example
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// Change these values to test your function
let myRandom = randomRange(5, 15);
console.log(myRandom);
