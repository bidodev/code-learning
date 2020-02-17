/**
 * Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:
 * findBrokenKeys(correct phrase, what you actually typed)
 *
 * Notes
 *
 * Broken keys should be ordered by when they first appear in the sentence.
 * Only one broken key per letter should be listed.
 * Letters will all be in lower case.
 *
 * Examples
 * findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
 * findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]
 * findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]
 */

// const findBrokenKeys = (supposedText, typedText) => {
//   let brokenKeys = [];

//   const supposedTextLowerCase = supposedText.toLowerCase();
//   const typedTextLowerCase = typedText.toLowerCase();

//   for (let i = 0; i < supposedTextLowerCase.length; i++) {
//     if (supposedTextLowerCase[i] !== typedTextLowerCase[i]) {
//       if (!brokenKeys.includes(supposedTextLowerCase[i])) {
//         brokenKeys.push(supposedTextLowerCase[i]);
//       }
//     }
//   }

//   return brokenKeys;
// };
// console.log(findBrokenKeys("happy birthday", "hawwy birthday")); //["p"]
// console.log(findBrokenKeys("starry night", "starrq light")); //["y", "n"]
// console.log(findBrokenKeys("beethoven", "affthoif5")); //["b", "e", "v", "n"]

function findBrokenKeys(str1, str2) {
  return [...new Set(str1.split("").filter((a, index) => a !== str2[index]))];
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
