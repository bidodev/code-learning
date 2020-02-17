const arr = [1, 2, 3, 4, 5, 6];

//1. forEach()
//This method can help you to loop over array's items.
arr.forEach((item) => {
  console.log(item); // output: 1 2 3 4 5 6
});

//2. includes()
//This method check if array includes the item passed in the method.

console.log(arr.includes(2));
console.log(arr.includes(7)); // output: false

//3. filter()
//This method create new array with only elements passed condition inside the provided function.
const filtered = arr.filter((number) => {
  return number > 2;
});
console.log(filtered);

//4 .map()
//This method create new array by calling the provided function in every element.
const addOne = arr.map((number) => {
  return number + 1;
});
console.log(addOne);

//5. reduce()
//The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value - MDN
const sum = arr.reduce((total, number) => {
  return total + number;
});
console.log(sum);

//6. some()
//This method check if at least one of array's item passed the condition. If passed, it return 'true' otherwise 'false'.
const largeNum = arr.some((number) => {
  return number > 5;
});
console.log(largeNum);

//7. every()
//This method check if all array's item passed the condition. If passed, it return 'true' otherwise 'false'.
const everyGreater = arr.every((number) => {
  return number > 0;
});
console.log(everyGreater);

// 8. sort()
// This method used to arrange/sort array's item either ascending or descending order.
const sort = arr.sort((x, y) => {
  return x > y ? -1 : 1;
});
console.log(sort);

// 9. Array.from()
//NB: array.split("") is faster
// This change all thing that are array-like or iterable into true array especially when working with DOM, so that you can use other array methods like reduce, map, filter and so on.
const name = "frugence";
const nameArray = Array.from(name);

console.log(name); // output: frugence
console.log(nameArray); // output: ['f', 'r', 'u', 'g', 'e', 'n', 'c', 'e']
