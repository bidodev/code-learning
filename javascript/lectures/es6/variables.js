// var catName;
// var quote;
// function catTalk() {
//   "use strict";

//   catName = "Oliver";
//   quote = catName + " says Meow!";

// }
// catTalk();

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  return (quote = catName + " says Meow!");
}
console.log(catTalk());

/**
 * ES6: Compare Scopes of the var and let KeywordsPassed
 *
 * When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
 * The let keyword behaves similarly, but with some extra features.
 * When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
 */

/**
 * With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable.
 */
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]

console.log(i); //We could acess i from outsite, using let it wouldn't be possible.
// returns 3

//Const
/**
 * const has all the awesome features that let has, with the added bonus that variables declared using const are read-only.
 * They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.
 */

//A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.
//Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).

("use strict");
const FAV_PET = "Cats";
//FAV_PET = "Dogs"; // returns error

const printManyTimes = str => {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

  // change code above this line
};
printManyTimes("freeCodeCamp");
