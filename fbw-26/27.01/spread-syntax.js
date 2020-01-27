let array = [1, 2, 3, 4, 5, 4];
let copyArray = [...array];

console.log(copyArray);

//function
function sum(...args) {
  let array = args;
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return `The sum is: ${result}`;
}

// console.log(sum(2, 5, 6, 4, 8));
// console.log(sum(2, 5, 8, 8, 8, 8, 6, 4, 8));

//function
function sum(...args) {
  let array = args;
  return array.length;
}

console.log(sum(2, 5, 6, 4, 8));
console.log(sum(2, 5, 8, 8, 8, 8, 6, 4, 8));
