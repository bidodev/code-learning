// // Create a function that takes in a year and returns the correct century.
// // century(1756) ➞ "18th century"
// // century(1555) ➞ "16th century"
// // century(1000) ➞ "10th century"
// // century(1001) ➞ "11th century"
// // century(2005) ➞ "21st century"

// // const whichCentury = (year) => {
// //   split = year.split("");
// //   if (split.length === 3) {
// //     lastNumber = split.slice(split.length - 1).join("");
// //     firstNumber = split.slice(0, 1).join("");
// //   } else {
// //     firstNumber = split.slice(0, 2).join("");
// //     lastNumber = split.slice(split.length - 2).join("");
// //   }

// //   let integer = parseInt(firstNumber, 10);

// //   if (lastNumber == 0) {
// //     console.log(`Century`, integer);
// //   } else {
// //     console.log(`Century`, integer + 1);
// //   }
// // };

// // const whichCentury = (year) => {
// //   if (year < 1) {
// //     return "Please insert a valid year!";
// //   }
// // };

// const centuries = [{}];

// const whichCentury = (year) => {
//   if (typeof year !== "number" || year < 1) {
//     console.log("ERROR! This is not a valid year!");
//   } else {
//     yearStr = year.toString();

//     return yearStr.endsWith("00")
//       ? Math.floor(year / 100)
//       : Math.floor(year / 100 + 1);
//   }
// };
// console.log(whichCentury(101));
// whichCentury(0); //➞ should return "There is no year 0"
// whichCentury(1); //➞ "1th whichCentury"
// whichCentury(99); //➞ "1th whichCentury"
// whichCentury(100); //➞ "1th whichCentury"
// whichCentury(101); //➞ "2th whichCentury"
// whichCentury(1000); //➞ "10th whichCentury"
// whichCentury(1555); //➞ "16th whichCentury"
// whichCentury(2005); //➞ "21st century"

/**
 * // This Triangular Number Sequence is generated from a pattern of dots that form a triangle.
// The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15.
// Write a function that converts n number of places with its corresponding number.
// Examples
// triangle(1) ➞ 1
// triangle(6) ➞ 21
// triangle(215) ➞ 23220
 */

// const triangle = (num) => {
//   console.log;
// };
// console.log(triangle(1));

/**
 * // **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 15 (excluding one) and returns the missing integer.
// Examples:
// * missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 25145]) ➞ 5
// * missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// * missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
 */

let numbers = [10, 5, 1, 2, 4, 6, 8, 3, 13, 12, 15];

let maxNumber = Math.max(...numbers);
// console.log(maxNumber);

for (let i = 1; i < maxNumber; i++) {
  if (!numbers.includes(i)) {
    console.log(i);
  }
}

let numbers = [10, 5, 1, 2, 4, 6, 8, 3, 9];
for (let i = 1; i <= 10; i++) {
  if (numbers.indexOf(i) == -1) {
    console.log(i);
  }
}

/**
 * This Triangular Number Sequence is generated from a pattern of dots that form a triangle.
 * The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15.
 * Write a function that converts n number of places with its corresponding number.

  Examples
 
  triangle(1) ➞ 1
  triangle(6) ➞ 21
  triangle(215) ➞ 23220
 */

// const triangle = (num) => {
//   console.log(num);
// };
// triangle(1);
