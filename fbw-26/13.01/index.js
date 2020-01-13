// // Boolean inversion with!
// let old, nice, crazy;

// old = true;
// nice = false;
// crazy = !(3 < 3);

// console.log(old !== nice);
// console.log(crazy ? "Yeah" : "Nope");

// console.log("Abc");
// let givenName, firstName;

// firstName = "Hadi";

// console.log(givenName || firstName || "Abc");

// //let's do some Algorithm..

// //Nancy's income is 500 Euro per week... How much money does she makes every year?
// const nancySalary = 52 * 500;
// console.log(`Nancy salary is`, nancySalary);

// /*
// let hours = [8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4];

// for (i = 0; i < hours.length; i++) {
//   result = hours += [i];
//   return result;
// }

// console.log(hours.length);
// console.log(result / hours.length);
// */

// let nancyWorkingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
// console.log(nancyWorkingHours);

// console.log(
//   `Nancy worked last two weeks 58.5, the Average is`,
//   nancyWorkingHours / 10
// );

// // console.log(true ? "Cool" : "Nope sorry");

// // if (1 < 4 || (1 < 55 && true)) {
// //   console.log("Sure, 1 is bigger than 1");
// // } else {
// //   console.log("Please, Go back to elementary school");
// // }

// let a, b, c;

// a = 1 === 4;
// b = 20 < 100;
// c = true;
// let counter = 0;
// let logIn = false;

// if (a == c && b) {
//   console.log("Hey.. if");
//   counter = 2;
//   logIn = true;
// } else {
//   console.log("Hey.. else");
//   counter = 3;
//   logIn = false;
// }

// console.log(logIn, counter);

//exercises
// A math student scored 75, 70, 85, 90, 100 on the first five tests he took .
// After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output:  --.

let scored = 75 + 70 + 85 + 90 + 100;
console.log(scored / 5);

newValue = 85 * 6;
console.log(newValue);

console.log(`Score in the sixth test was:`, newValue - scored);
