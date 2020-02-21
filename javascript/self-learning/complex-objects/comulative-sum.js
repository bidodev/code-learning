// Cumulative Array Sum
// Create a function that takes an array of numbers and returns an array where each number
///is the sum of itself + all previous numbers in the array.

// Examples
// cumulativeSum([1, 2, 3, 4]) ➞ [1, 3, 6, 10]
const cumulativeSum = (arr) => {
  const sum = (arr) => {
    return arr.reduce((saver, current) => (saver += current));
  };

  const originArr = arr;
  const resultArr = [];

  for (let i = 0; i < originArr.length; i++) {
    if (resultArr.length == i) {
      sliced = originArr.slice(0, resultArr.length + 1);
      resultArr.push(sum(sliced));
    }
  }

  return resultArr;
};

console.log(cumulativeSum([1, 2, 3, 4])); //[1, 3, 6, 10]
console.log(cumulativeSum([3, 3, -2, 408, 3, 3])); // [3, 6, 4, 412, 415, 418]

// Notes
// Return an empty array if the input is an empty array.
