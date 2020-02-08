// // Check whether one of two integers is a multiple of 7 or 11. If so, print true.

// function checkNumber(numberOne, numberTwo) {
//   if (
//     numberOne % 77 == 0 ||
//     numberTwo % 77 == 0 ||
//     numberTwo % 7 == 0 ||
//     numberTwo % 11 == 0
//   ) {
//     console.log("The first or second number is whether a multiple of 7 or 11");
//   } else {
//     console.log(
//       "Leider nicht.. None of both number is whether a multiple of 7 or 11 "
//     );
//   }
// }
// checkNumber(10, 48);

// Check whether one of two integers is a multiple of 7 or 11. If so, print true.
// 77 is the smaller number which is at same time divided by 7 and 11.
number = 6;

if (number < 7) {
  console.log(`The given number ${number} is not a multiply of 7 or 11`);
} else {
  console.log(
    77 % number == 0
      ? `Yay ${number}.. is a Multiple of 7 or 11!`
      : `Nein ${number} is not a Multiple of 7 or 11!`
  );
}

// function passNumber(number) {
//   console.log(
//     77 % number == 0
//       ? `Yay ${number}.. is a Multiple of 7 or 11!`
//       : `Nein ${number} is not a Multiple of 7 or 11!`
//   );
// }
// passNumber(20);
