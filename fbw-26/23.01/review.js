// // const div = (x, y) => {
// //   return x / y;
// // };

// // console.log(div(10, 2));

// // c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
// // Examples:
// // hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
// // hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
// // hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”

// // create a function with a parameter which get a argument.. (our string)

// // // split the string into a array, go trought the array found the condition and replace and push into the arrray.
// // return new Array and use join.

// //task (turn it into a foreach)
// function hackerSpeak(string) {
//   hackedArr = [];

//   let toSmallStr = string.toLowerCase();
//   let letters = toSmallStr.split("");

//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] == "a") {
//       letters[i] = 4;
//       hackedArr.push(letters[i]);
//     } else if (letters[i] == "e") {
//       hackedArr.push((letters[i] = 3));
//     } else if (letters[i] == "i") {
//       hackedArr.push((letters[i] = 1));
//     } else if (letters[i] == "o") {
//       hackedArr.push((letters[i] = 0));
//     } else if (letters[i] == "s") {
//       hackedArr.push((letters[i] = 5));
//     } else {
//       hackedArr.push(letters[i]);
//     }
//   }
//   return hackedArr.join("");
// }

// // console.log(hackerSpeak("Hey cute, how u doing.."));

// // Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not.
// //  NB(Nota Bene: used to mark something as particularly important): A number is symmetrical when it is the same as its reverse.
// // Examples:
// // isSymmetrical(7227) ➞ true
// // isSymmetrical(12567) ➞ false
// // isSymmetrical(44444444) ➞ true
// // isSymmetrical(9939) ➞ false
// // isSymmetrical(1112111) ➞ true

// // when find the _ make the next Bigger and remove the actual..Bigger

// // splice.

// // snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
// // Examples:
// // toCamelCase(“hello_world”) ➞ “helloWorld”
// // toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun”

// let string = "my_snake";
// strSplited = string.split("");
// let newStr = "";
// let newwstrring;

// // console.log(strSplited);

// for (let i = 0; i < strSplited.length; i++) {
//   if (strSplited[i] === "_") {
//     strSplited[i + 1].toUpperCase();
//     // console.log(strSplited[i + 1].toUpperCase());
//     strSplited.push(strSplited[i + 1].toUpperCase());

//     const index = strSplited.indexOf(strSplited[i]);

//     if (index > -1) {
//       strSplited.splice(index, 1);
//     }
//   }
// }
// console.log(strSplited);
