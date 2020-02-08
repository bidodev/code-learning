// Check if three given integer values are in the range 50 to 99 (inclusive).
//Print true if one or more of them are in the range.

let numberOne = 51;
let numberTwo = 60;
let numberThree = 52;

let = rangeStart = 50;
let = rangeEnd = 99;

if (
  (numberOne >= rangeStart && numberOne <= rangeEnd) ||
  (numberTwo >= rangeStart && numberTwo <= rangeEnd) ||
  (numberThree >= rangeStart && numberThree <= rangeEnd)
) {
  console.log(`At least one number is inside the range`);
} else {
  console.log("At least one of the numbers ain't on the range given..");
}
