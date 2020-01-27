// function startVowel(str) {
//   // Convert string to lowercase
//   str = str.toLowerCase();

//   // Initialize array of vowels
//   const vowels = ["a", "e", "i", "o", "u"];

//   if (vowels.includes(str[0])) {
//     // If first letter is a vowel
//     return str + "way";
//   } else {
//     // If first letter is a vowel
//     return str + "ay";
//   }
// }

// function pigLatin(str) {
//   let translation = [];
//   let lowerCase = str.toLowerCase();
//   let splitStr = lowerCase.split(" ");

//   for (let i = 0; i < splitStr.length; i++) {
//     // i = 1   splitStr = that
//     let firstChr = splitStr[i][0]; // t
//     let remainder = splitStr[i].slice(1, splitStr[i].length); //hat
//     const newString = remainder + startVowel(firstChr);
//     // hat + z + ay
//     translation.push(newString);
//   }
//   let result = translation.join(" ");
//   console.log(result[0]);
//   result[0].toUpperCase();
//   return result;
// }

// const strPig = "Cats are great pets";
// console.log(pigLatin(strPig));

(function add() {
  console.log("Hi");
})();

console.log(0.1 + 0.2);
