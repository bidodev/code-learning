//Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr
function multiplyAll(sumArray) {
  let product = 1;
  for (let i = 0; i < sumArray.length; i++) {
    //i = 0

    for (let j = 0; j < sumArray[i].length; j++) {
      product *= sumArray[i][j];
    }
  }
  return product;
}

// Modify values below to test your code
console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ])
);

//   //Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr
//   function multiplyAll(arr) {
//     var product = 1;
//     // Only change code below this line

//     // Only change code above this line
//     return product;
//   }

//   // Modify values below to test your code
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7]
//   ]);

//   //multiplyAll([[1],[2],[3]]) should return 6
//   //multiplyAll([[1,2],[3,4],[5,6,7]]) should return 5040
//   //multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) should return 54
