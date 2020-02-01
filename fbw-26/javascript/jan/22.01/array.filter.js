// let arrNumbers = [10, 20, 30, 40, 50];

// //array.map
// const numbersMultiply = arrNumbers.map(value => {
//   return value * 5;
// });

// console.log(numbersMultiply);

//One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
// Examples:
// unique([3, 3, 3, 7, 3, 3]) ➞ 7
// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
// 0 -1 -2 -3 -4 -5
// let numbers = [0, 0, 0.77, 0, 0];

// function sortOut(givenArray) {
//   let result = [];

//   for (let i = 0; i < givenArray.length; i++) {
//     if (givenArray[i] != givenArray[i + 1]) {
//       result.push(givenArray[i]);
//     }
//   }
//   return result;
// }
// console.log(sortOut(numbers));

// //
function unique(givenArray) {
  result = "There is no unique element";
  givenArray.forEach(element => {
    if (element != givenArray[element + 1]) {
      result = element;
    }
  });
  console.log(result);
}
unique([7, 7, 7, 8, 7]);
