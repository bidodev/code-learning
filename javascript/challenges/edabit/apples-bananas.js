/**
 * Apples and Bananas
 *
 *  Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.
 *
 *  Examples
 * "apples and bananas".vreplace("u") ➞ "upplus und bununus"
 * "cheese casserole".vreplace("o") ➞ "chooso cossorolo"
 * "stuffed jalapeno poppers".vreplace("e") ➞ "steffed jelepene peppers"
 */

const isVowel = (letter) => {
  vowels = ["a", "e", "i", "o", "u"];
  let isWowel = false;

  vowels.forEach((vowel) => {
    if (letter === vowel) {
      isWowel = true;
    }
  });
  return isWowel;
};

const vowelReplace = (str, vowel) => {
  split = str.split("");

  split.forEach((element) => {
    if (isVowel(element)) {
      str = str.replace(element, vowel);
    }
  });
  return str;
};

console.log(vowelReplace("apples and bananas", "i"));

//Alternative solution
function vreplace(str, vowel) {
  return str.replace(/[aeiou]/gi, vowel);
}
console.log(vreplace("apples and bananas", "u"));
console.log(vreplace("cheese casserole", "o"));
console.log(vreplace("stuffed jalapeno poppers", "e"));
