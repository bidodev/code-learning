// ### Bonus Magic Square:
// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15.
// Here's an example:

// 8 1 6
// 3 5 7
// 4 9 2

// The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.
// #### Examples:

// [8, 1, 6, 3, 5, 7, 4, 9, 2] -> true
// [2, 7, 6, 9, 5, 1, 4, 3, 8] -> true
// [3, 5, 7, 8, 1, 6, 4, 9, 2] -> false
// [8, 1, 6, 7, 5, 3, 4, 9, 2] -> false

let array = [8, 1, 6, 3, 5, 7, 4, 9, 2]; //-> false
let newArray = [];

array.forEach((element) => {
  newArray.push([element]);
});
console.log(newArray);

// let row1 = arr[0] + arr[1] + arr[2];
// let row2 = arr[3] + arr[4] + arr[5];
// let row3 = arr[6] + arr[7] + arr[8];

// let row4 = arr[0] + arr[3] + arr[6];
// let row5 = arr[1] + arr[4] + arr[7];
// let row6 = arr[2] + arr[5] + arr[8];

// let diag1 = arr[0] + arr[4] + arr[8];
// let diag2 = arr[2] + arr[4] + arr[6];
