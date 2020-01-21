// // function sum(num1, num2) {
// //   return num1 + num2;
// // }

// // console.log(sum(2, 5));

// // function div(num1, num2) {
// //   return num1 / num2;
// // }

// // console.log(div(10, 2));

// // const numbers = [1, 2, 3, 5, 6, 7, 8, 9];

// // function biggerFive(array) {
// //   let result = array.filter(num => num >= 5);
// //   return result;
// // }

// let months = {
//   1: "January",
//   2: "February",
//   3: "March",
//   4: "Abril",
//   5: "May",
//   6: "June",
//   7: "July",
//   8: "August",
//   9: "Setember",
//   10: "October",
//   11: "November",
//   12: "December"
// };

// function monthCheck(val) {
//   let result = "";

//   if (val < 1 || val > 12) {
//     result = "This month do not exist...";
//   } else {
//     result = months[val];
//   }
//   return result;
// }

// console.log(monthCheck(120));

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

function numToMonth(num) {
  return months[num - 1];
}
console.log(numToMonth(15));
