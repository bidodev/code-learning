/**
 * Create a function called fixStart. It should take a single argument, a string, and return a version where
 * all occurences of its first character have been replaced with '*', except for the first character itself.
 *  Examples:
 * fixStart("babble") -> "ba**le"
 * fixStart("people") -> "peo*le"
 * fixStart("nonsense") -> "no*se*se"
 */

const fixStart = (string) => {
  result = "";
  letter = string[0];

  for (let i = 1; i < string.length; i++) {
    result += string[i].replace(letter, "*");
  }
  return letter + result;
};

console.log(fixStart("babblb"));
console.log(fixStart("people"));
console.log(fixStart("nonsense"));
