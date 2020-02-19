/*You have 2 integer arrays, a and b, and an integer target value v. 

Determinate whether  there is a pair of numbers, 
where one number is taken from a and the other from b, that can be  

added together to get a sum of v.Return true is such a pair exists, otherwise return false
a = [0, -1, 32, 5, -5, 68];
b = [-10, 40, -3, 9, 2546];
v = -8;

*/

// const addTogether = (firstArr, secondArr, target) => {
//   for (let i = 0; i < firstArr.length; i++) {
//     const ELEMENT_IN_A = firstArr[i];
//     for (let j = 0; j < secondArr.length; j++) {
//       const ELEMENT_IN_B = secondArr[j];
//       if (ELEMENT_IN_A + ELEMENT_IN_B === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

const firstArr = [0, -1, 32, 5, -5, 68];
const secondArr = [-10, 40, -3, 8, 2546];
let target = -8;

const addTogether = (firstArr, secondArr, target) =>
  firstArr.some((a) => secondArr.some((b) => a + b == target));

console.log(addTogether(firstArr, secondArr, target));
