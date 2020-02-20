/**
 * Create a function called fixStart. It should take a single argument, a string, and return a version where
 * all occurences of its first character have been replaced with '*', except for the first character itself.
 *  Examples:
 * fixStart("babble") -> "ba**le"
 * fixStart("people") -> "peo*le"
 * fixStart("nonsense") -> "no*se*se"
 */

const fixStart = (string) => {
  const array = string.split("");

  for (let i = 1; i < array.length; i++) {
    letter = array[0];
    array[i] = array[i].replace(letter, "*");
  }
  return array.join("");
};

console.log(fixStart("babble"));
console.log(fixStart("people"));
console.log(fixStart("nonsense"));
