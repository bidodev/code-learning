/*You have 2 integer arrays, a and b, and an integer target value v. 

Determinate whether  there is a pair of numbers, 
where one number is taken from a and the other from b, that can be  

added together to get a sum of v.Return true is such a pair exists, otherwise return false
a = [0, -1, 32, 5, -5, 68];
b = [-10, 40, -3, 9, 2546];
v = -8;

*/

arrA = [2, 2, 10];
arrB = [1, 20, 30];
target = 3;

for (let i = 0; i < arrA.length; i++) {
  const ELEMENT_I = arrA[i];
  for (let j = 0; j < arrB.length; j++) {
    const ELEMENT_J = arrB[j];
    if (ELEMENT_I + ELEMENT_J === target) {
      console.log(true);
    }
  }
}
