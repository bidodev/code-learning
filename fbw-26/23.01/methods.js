// //.filter()

// const arrNum = [10, -20, 30, 40, 50, 60, 70];
// const myFilter = arrNum.filter(value => value > 10);

// console.log(myFilter);

// let selectedColors = ["red", "blue"]; //array literal
// console.log(selectedColors);

// //.map
// const teste = myFilter.map(function(value) {
//   return "<li>" + value + "<li>";
// });
// console.log(teste);

// // const myMult = arrNum.map(value => {
// //   return value * 10;
// // });

// // console.log(myMult);

// // const myString = ["This is my"];

// // var str = "Hello world, welcome to the universe welcome.";
// // var n = str.lastIndexOf("welcome");
// // var i = str.indexOf("welcome");

// // console.log(n, i);

// // 2.
// // One is not like the others... Create a function that takes an array of numbers and return the number that's unique.
// Examples:
// // unique([3, 3, 3, 7, 3, 3]) ➞ 7
// // unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// // unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
// */
function unique(givenArray) {
  result = "There is no unique element";
  givenArray.forEach(element => {
    if (element != givenArray[element + 1]) {
      result = element;
    }
  });
  console.log(result);
}
unique([0, 1, 1, 1, 1, 1, 1, 1]);
