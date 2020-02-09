/**
 * Return true if the given string is a palindrome. Otherwise, return false.
 *
 *  A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 *
 * Note
 * You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
 * We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
 * We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
 */

const palindrome = str => {
  //first step: We have to validate the incomming string.
  const strValidated = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reversedString = "";

  //second step: reverse the validated string
  for (let i = strValidated.length - 1; i >= 0; i--) {
    reversedString += strValidated[i];
  }

  //third step: return if it's true or false.
  return strValidated === reversedString;
};

console.log(palindrome("eye")); //should return a boolean.
console.log(palindrome("eye")); //should return true.
console.log(palindrome("_eye")); //should return true.
console.log(palindrome("race car")); //should return true.
console.log(palindrome("not a console.log(palindrome")); //should return false.
console.log(palindrome("A man, a plan, a canal. Panama")); //should return true.
console.log(palindrome("never odd or even")); //should return true.
console.log(palindrome("nope")); //should return false.
console.log(palindrome("almostomla")); //should return false.
console.log(palindrome("My age is 0, 0 si ega ym.")); //should return true.
console.log(palindrome("1 eye for of 1 eye.")); //should return false.
console.log(palindrome("0_0 (: /- :) 0-0")); // should return true.
console.log(palindrome("five|_/|four")); // should return false.
