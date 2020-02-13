/**
 * Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false
 */
const divisible = (num) => {
  return num % 100 == 0;
};

console.log(divisible(1)); // false
divisible(1000); // true
divisible(100); // true

/**
 * Convert Hours and Minutes into Seconds
 * Write a function that takes two integers (hours, minutes) and converts them into seconds.
 *
 * Examples
 * convert(1, 3) ➞ 3780
 * convert(2, 0) ➞ 7200
 * convert(0, 0) ➞ 0
 */

const convert = (hours, minutes) => {
  return (hours * 60 + minutes) * 60;
};
console.log(convert(2, 0)); // 7200
