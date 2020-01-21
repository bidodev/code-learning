const numbers = [1, -1, 2, 3];

sum = 0;
for (n of numbers) {
  sum += n;
}
console.log(sum); //print 5

const otherSum = numbers.reduce((total, currentValue) => {
  return currentValue + total;
});

console.log(otherSum); //print 5

// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).
// Note: reduce() does not execute the function for array elements without values.
// Note: this method does not change the original array
