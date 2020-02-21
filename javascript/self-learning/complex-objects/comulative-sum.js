// Cumulative Array Sum
// Create a function that takes an array of numbers and returns an array where each number
///is the sum of itself + all previous numbers in the array.

// Examples
// cumulativeSum([1, 2, 3, 4]) ➞ [1, 3, 6, 10]

const sum = (arr) => {
  result = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result += element;
  }
  return result;
};

original = [3, 3, -2, 408, 3, 3];
finalArray = [];

for (let i = 0; i < original.length; i++) {
  if (finalArray.length == i) {
    sliced = original.slice(0, finalArray.length + 1);
    finalArray.push(sum(sliced));
  }
}
console.log(finalArray);

//console.log(sum([2, 3]));

// let length = result.length;
// //console.log(length);

// if (length == 0) {
//   result.push(original[length]);
// }
// if (length == 1) {
//   result += original[length];
// }

// // console.log(result);
// cumulativeSum([1, -2, 3]) ➞ [1, -1, 2]

// cumulativeSum([3, 3, -2, 408, 3, 3]) ➞ [3, 6, 4, 412, 415, 418]
// Notes
// Return an empty array if the input is an empty array.
