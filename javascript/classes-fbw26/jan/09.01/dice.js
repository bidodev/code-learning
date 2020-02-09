//Math.random (JavaScript method)

/*
  1. What it does..
  2. How to apply it..
  3. How to generate a number between (0 and 10)

*/

function generateNumber() {
  let result = 0;
  result = Math.floor(Math.random() * 6);

  //1. Math.random will return a float number between 0 and 1
  //2. Multiple it by 6 which means that the number never will be higher than 6! (6 is the higher number in a Dice).
  //3. We have to get the float number and

  //4. The Math.floor() function returns the largest integer less than or equal to a given number.
  /*
      console.log(Math.floor(5.05));
      // expected output: 5

      console.log(Math.floor(5));
      // expected output: 5

      console.log(Math.floor(-5.05));
      // expected output: -6
    */

  result === 0 ? result++ : result; //If the result is equal 0 add 1 else return the previous result from the math.
  return result;
}

let playerOne = generateNumber();
let playerTwo = generateNumber();

console.log(
  `First player trow a ${playerOne}\nSecond player trow a ${playerTwo}`
);

if (playerOne === playerTwo) {
  console.log("\nOh nein.. We had a draft...");
} else {
  console.log(
    playerOne > playerTwo ? "\nPlayer One Own!!" : "\nPlayer Two Own!!"
  );
}
