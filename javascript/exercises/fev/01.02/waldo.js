/**
 * Where’s Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he’s not.
 */

let myText = "Somewhere Waldo is hiding in this text.";
// console.log(myText.includes("Waldo"));

const searching = text => {
  let result;
  let waldoRegex = /Waldo/;
  result = waldoRegex.test(text);
  return result;
};
console.log(searching(myText));

const searchFor = (text, word) => text.includes(word);
console.log(searchFor(myText, "Waldo"));
