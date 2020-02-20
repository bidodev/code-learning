// // let myNumber = 17;
// // let mySecondNumber = 3;

// // console.log(myNumber % mySecondNumber);

// // let floatNumber = "Lol";

// // console.log((isNaN(floatNumber)) ? console.log("Not is a number..") : "Its a number");

// /*  1. Create two variables.
// One variable should contain a string value and the other should contain a number. Concatenate the string and the number.

// */
// let myFirstVar = "4";
// let mySecondVar = 2;

// let result = (myFirstVar + mySecondVar);
// console.log(result);
// console.log(typeof(result));

// //2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
// function checkNumber(number){

//      console.log(`The number ${number} is`, (number % 2 == 0) ? "Even" : "Odd");
// }

// checkNumber(14);

// /* 9. Create a new string from a given string by changing the position of first and last characters.
// The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
// */
// let myString = "JavaScript";
// console.log(myString[myString.length - 1] + myString.substr(1, myString.length - 2)+ myString[0]);

// //exponetiation
// let power = 2;
// console.log(power ** 4);

// //Math.max()
// console.log(Math.max(5,1,3,7,9));

// // Create a variable with the value of “123”. Convert it to a number.
// let newInteger = "123";
// console.log(typeof(newInteger));

// let intResult = parseInt(newInteger)
// console.log(typeof(intResult));

// // Create a variable with the value of “130.7". Convert it to a number.
// let newFloat = "130.7";
// console.log(typeof(newFloat));

// let floatResult = parseFloat(newFloat)
// console.log(floatResult, typeof(floatResult));

// // Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
// let isDog = true;
// console.log((isDog ? "Pat, pat" : "Find me a dog to a pat.."));

// // Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print ‘you’re going too fast!’.
// //If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.
// let speedLimit = 50;
// console.log((speedLimit > 50) ? "Bist du bescheuert? You're going to fast!!" : "Oh come on you're driving like your Oma!");

// // Declare a variable named age. If age is below 16, print “serve butter beer”. Otherwise print “serve beer”.
// let age = 10;
// console.log((age < 16) ? "Serve butter beer" : "serve beer");

// // Declare a variable named isStudent. If true, print “Ticket costs €5,00”. If false, print “Ticket costs €12,00".
// let isStudent;
// console.log((speedLimit > 50) ? "Bist du bescheuert? You're going to fast!!" : "Oh come on you're driving like your Oma!");
// // Declare a variable named okMarie. Check if there is ‘cake’ - if so, print “Let them eat cake”. If not, print “Oh, bother”.

//Play Dice game...
/* 
Bugs to fix..
Not handling cases where the number is 0..
*/

function generateNumber() {
  let result = 0;
  result = Math.floor(Math.random() * 6);

  //1. Math.random will return a float number between 0 and 1
  //2. Multiple it by 6 which means that the number never will be higher than 6! (6 is the higher number is a Dice).
  //3. We have to get the float number and
  //4. Math.floor return a intenger number..

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
