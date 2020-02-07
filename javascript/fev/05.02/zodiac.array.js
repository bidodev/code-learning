/*const lastDay = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
const signs = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn"
];
// let array = [["Capricorn", 19]];
// console.log(array[0][1]);
function mySign(day, month) {
  if (day > lastDay[month]) {
    console.log(signs[month]);
  } else {
    console.log(signs[month - 1]);
  }
}
//print the Sign
mySign(27, 11);
*/

/**
 * We have an array with the signs, and their lastDay in the month
 */
let signs = [
  ["Capricorn", 19],
  ["Aquarius", 18],
  ["Pisces", 20],
  ["Aries", 20],
  ["Taurus", 21],
  ["Gemini", 21],
  ["Cancer", 22],
  ["Leo", 22],
  ["Virgo", 21],
  ["Libra", 22],
  ["Scorpio", 21],
  ["Sagittarius", 20],
  ["Capricorn", 19]
];

const mySign = (day, month) =>
  day > signs[0][1] ? signs[month][0] : signs[month - 1][0];

// print the Sign
console.log(mySign(18, 1));
