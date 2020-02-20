//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99).
//Print true if either of them are in the range.

let numberOne = 40;
let numberTwo = 99;

if (
  (numberOne >= 50 && numberOne <= 99) ||
  (numberTwo >= 50 && numberTwo <= 99)
) {
  console.log("At least one of the numbers numbers are in the range..");
} else {
  console.log("None of the numbers ain't on the range given..");
}
