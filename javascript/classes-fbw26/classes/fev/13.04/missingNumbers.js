/**
 * Find the missings numbers in d
 */
let numbers = [10, 5, 1, 2, 4, 6, 8, 3, 13, 12, 15];

const missingNumbers = (arr, start, end) => {
  let missingArr = [];

  for (let i = start; i < end; i++) {
    if (!arr.includes(i)) {
      missingArr.push(i);
    }
  }
  return missingArr;
};

console.log(missingNumbers(numbers, 8, 30));
