// Amplify the Multiples of 4.
// Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:
// For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// The given integer will always be equal to or greater than 1.
// Include the given number (the number in the parameters).
//  Examples:
//  amplify(4) ➞ [1, 2, 3, 40]
//  amplify(3) ➞ [1, 2, 3]
//  amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

const multValues = num => {
  //create our new array..
  let oldArray = [];
  for (let i = 1; i <= num; i++) {
    oldArray.push(i);
  }

  //go trough the array do the math and return the array..
  let newArr = [];
  oldArray.forEach(value => {
    if (value % 4 == 0) {
      newArr.push(value * 10);
    } else {
      newArr.push(value);
    }
  });
  return newArr;
};

console.log(multValues(24));

//One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
// Examples:
// unique([3, 3, 3, 7, 3, 3]) ➞ 7
// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

const array = [3, 3, 3, 7, 3, 3];

if (array[0] != array[1]) {
  console.log("Oi");
}

const unique = array.filter(
  value => array.indexOf(value) === array.lastIndexOf(value)
);
console.log(unique);

// The filter() method creates an array filled with all array elements that pass a test (provided as a function).
// Note: filter() does not execute the function for array elements without values.
// Note: filter() does not change the original array.

// function unicoItem(arr) {
//   let currentValue = 0;
//   let current = [];
//   let remainder = [];

//   for (let i = 0; i < arr.length; i++){
//       if (current.length == 0 || current [0] == arr[i])
//   }
// }
