// Let’s play mini FizzBuzz! For any given number, if the number is:
// divisible by 3, print “Fizz”.
// divisible by “5", print “Buzz”.
// divisible by both 3 and 5, print “FizzBuzz”.
// That is, if any of the above conditions apply, print the above words instead of the number.
// Otherwise, just print the number.

function shitGame(number) {
  if (number % 15 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(
      `${number} is not divisible by 3 or 5! Go back to elementary school!`
    );
  }
}
shitGame(0);
