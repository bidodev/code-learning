/**
 * 1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
*
Examples:
4, { min: 0, max: 5 }) ➞ true
4, { min: 4, max: 5 }) ➞ true
4, { min: 6, max: 10 }) ➞ false
5, { min: 5, max: 5 }) ➞ true

*/
const isRange = (num, obj) => num >= obj.min && num <= obj.max;

console.log(isRange(4, { min: 0, max: 5 })); //true
console.log(isRange(4, { min: 4, max: 5 })); //true
console.log(isRange(4, { min: 6, max: 10 })); //false
console.log(isRange(5, { min: 5, max: 5 })); //true

/**
 *  2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
 * The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
 */
const SCRABBLE_TILES = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
];

const maxScore = arr => {
  //creating a newArray, I don't want mess up with the original Array.
  newArray = [...arr];

  let i = 0;
  let maxScore = 0;

  //a simple while solve our life
  while (i < SCRABBLE_TILES.length) {
    maxScore += SCRABBLE_TILES[i].score;
    i++;
  }
  return maxScore;
};
console.log(maxScore(SCRABBLE_TILES));

/**
 * 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
 *
 * Examples:
 * {} ➞ true
 * {a: 1} ➞ false
 */

function isEmpty(obj) {
  for (let key in obj) {
    //console.log("DEBUG: isEmpty -> key", key);
    if (obj.hasOwnProperty(key)) return false; //if it has the property, means that the object is not empty, therefore we should return false.
  }
  return true;
}
console.log(isEmpty({})); // Empty Object

/**
 * 4. Free Shipping. Create a function that determines whether an online order should get free shipping.
 * An order gets free shipping if the total cost of items exceeds €50.
 *
 * Examples:
 * freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
 * freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
 * freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
 */

const freeShipping = obj => {
  let result = 0;
  for (let [key, value] of Object.entries(obj)) {
    result += value;
  }

  return result > 50; //gets free shipping if the total cost of items exceeds €50.
};
console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
);

/*
 * 5. Programming Object.

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
*/

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//  Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming);

//   Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming);

//   Using the delete keyword, write the command to remove the jokes key from the programming object.(need Google)
delete programming.jokes;
console.log(programming);

//   Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming);

//  Using a loop, iterate through the languages array and console.log all of the languages.
for (let i = 0; i < programming.languages.lengt; ) {
  console.log(programming.languages[i]);
  i++;
}
//   Using a loop, console.log all of the keys in the programming object.
for (let key in programming) {
  console.log(`Key: ${key} `);
}
//   Using a loop, console.log all of the values in the programming object.
console.log(Object.values(programming));
for (let key in programming) {
  console.log(`Value: ${programming[key]}`);
}

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
let myObject = {
  myMethod: function(obj) {
    if (obj.isRewarding === true && obj.isChallenging == true) {
      return `Learning the programming languages: "${programming.languages.join(
        " "
      )}" is rewarding and challenging.`;
    }
  }
};
console.log(myObject.myMethod); //JavaScript tells us that myMethod is a function, if we want call this function we need function call ().
console.log(myObject.myMethod({ isChallenging: true, isRewarding: true }));

//  Bonus:
// Make sure that any other code cannot delete or change properties of the object.(need Google)
Object.freeze(programming);
programming.languages = "C++";
console.log(programming); //We can see that C++ wasn't include.
