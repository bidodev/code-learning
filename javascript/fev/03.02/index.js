// /**
//  * functions inside functions
//  */

// function main(num1, num2) {
//   //outer functions
//   function second(n) {
//     //inner function
//     return n * n;
//   }
//   return second(num1) + second(num2);
// }

// console.log(main(3, 4));

// var nice = true;

// const outerFunction = (x, y) => {
//   let big = true;
//   console.log(big + "outerFunction");

//   const innerFunction = num => {
//     big = false;
//     console.log(big + "InnerFunction");
//     return num + 10;
//   };

//   return innerFunction(x) + innerFunction(y);
// };

// console.log(outerFunction(3, 4));

// /**
//  * closure
//  */
// var number = 10;

// function fun() {
//   return number + number;
// }

// console.log(fun());
// console.log(number);

// const add = (() => {
//   var counter = 0;

//   return function() {
//     counter++;
//     return counter;
//   };
// })();

// myVar = add();
// myVar = add();
// myVar = add();
// myVar = add();

// console.log(myVar);

// const myclose = (function() {
//   console.log("hi");
//   var x = 0;
//   return () => {
//     x++;
//     return x;
//   };
// })();

// myclose();
// console.log(myclose());

// //SIAF
// //self-invoking anonymous function

// //IIFE
// // Immediately-invoked Function Expression
// // two ways + passing parameter.
// const TAX = 20;

// const sum = ((x, y) => {
//   const TAX = 11;
//   return x + y * TAX;
// })(4, 5);

// console.log(sum);
// console.log(TAX);

// /**
//  * Write a function add that uses a closure that performs addition on arguments in two separate function calls.
//  * add (2)(3)
//  */

// function addOther(a) {
//   return function(b) {
//     return a + b;
//   };
// }

// console.log(addOther(2)(3));

// /**
//  * Write a function multiplier that uses a closure to perform multiplication.
//  * However, the outer function should be stored in a variable which is then called.
//  */
// const outerMult = (x, y) => {
//   //   console.log(x, y);
//   const innerFunc = num => {
//     // console.log(num);
//     return num;
//   };
//   return innerFunc(x) * innerFunc(y);
// };

// console.log(outerMult(4, 5));

// function multiplier(num) {
//   console.log(num);
//   return x => {
//     return x * num;
//   };
// }

// // const times = multiplier(2);
// // console.log(times(3)); //do another thing.

// // function makeFunc() {
// //   let name = "Juca";
// //   function displayName() {
// //     console.log(name);
// //   }
// //   return displayName;
// // }

// // let myFunc = makeFunc();

// // myFunc();

// function multiplier(num) {
//   function innerMult(x) {
//     1 * num;
//   }
//   return innerMult;
// }

// times = multiplier(5);
// console.log(times());

// var all = 3;

// (() => {
//   var all = "Hi";
//   console.log(all);
// })();

// console.log(all);

/**
 * Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. 
 * The function should be self invoked and should have the following parameters:
 * The current age of the person // e.g. 40
 * The retirement age of the person // e.g. 60
 * The monthly wage the person earns // e.g. 1000
 * The percentage (as integer) that the person saves each month // e.g. 10%
 * If the person has already retired then the message ‘You’re already retired!’ should be printed. 
 * 
 * If not, then the program should calculate how many years remain until the person retires, 
 * 
 * the monthly income and take a specific percent of this income every month as saved money.
 * Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?

 Output: $30000
 */

const user = {
  currentAge: 31,
  rentAge: 65,
  montlySaving: 2000,
  percentage: 30
};

((...arg) => {
  //console.log(arg);
  const yearsLeft = arg[0]["retirementAge"] - arg[0]["currentAge"];
  const monthlyWage = arg[0]["monthlyWage"];
  const savings = arg[0]["savings"];
  const savedMoney = function saveMoney(value, years, tax) {
    let monthsLeft = years * 12;
    let savedbYMonth = value * (tax / 100);
    return monthsLeft * savedbYMonth;
  };
  if (arg[0]["currentAge"] < arg[0]["retirementAge"]) {
    console.log(
      `Shade.. You still have to work ${yearsLeft} years before go to rent.. After this time you're going to have saved ${savedMoney(
        monthlyWage,
        yearsLeft,
        savings
      )} EUR`
    );
  } else {
    console.log("You're already retired");
  }
})(user);
