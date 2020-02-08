// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

function sum(numberOne, numberTwo) {
  let result = numberOne + numberTwo;
  if (result > 50 && result < 80) {
    console.log(`The sum ${result} is between 50 and 70`);
  } else {
    console.log(`The sum ${result} is outside of 50 and 70`);
  }
  return result;
}

sum(10, 15);
