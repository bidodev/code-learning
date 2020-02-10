// // const objects = [
// //   {
// //     nme: "Ali",
// //     lastName: "See"
// //   },
// //   {
// //     name: "Olga",
// //     lastName: "Kamasoski",
// //     printOut: function() {
// //       console.log("Hello");
// //     }
// //   },
// //   { name: "Juca" }
// // ];

// // objects[1].printOut();
// // objects[1]["printOut"]();

// // //clone vs reference
// // //string, boleans, int

// // let str = "Another Hi";
// // let newStr = str; //cloning
// // console.log(newStr);

// // str = "something else";
// // console.log(newStr);
// // console.log(str);

// // let num = 222;
// // let newNum = num;
// // console.log(newNum);

// // //compound
// // //Object, Array, function
// // const names = ["Ali", "Olga", "Nancy", "Zain"];
// // let newArr = names; //reference

// // console.log(names);
// // newArr[1] = "New";

// // console.log(newArr);

// // const car = {
// //   name: "Ford",
// //   year: 1995,
// //   color: "Black"
// // };

// // const newCar = car;
// // console.log(newCar);

// // newCar.color = "Red";
// // console.log(car);

// // //Shalow copy using ...(spread operator)
// // let namesArr = ["Ali", "Hadi"];
// // let newNamesArr = [...namesArr];
// // newNamesArr[1] = "Juca";

// // console.log(namesArr);
// // console.log(newNamesArr);

// // //shalow copying using contaxt
// // let newNames2 = [].concat(namesArr);
// // console.log(newNames2);

// // //old Way using slice

// // const cloneNames = namesArr.slice();
// // console.log(cloneNames);

// // const newObject2 = Object.assign(car);

// // //
// // const otherObject = { ...car };
// // console.log(otherObject);

// // //infinity function call
// // // function one() {
// // //   two();
// // // }
// // // function two() {
// // //   one();
// // // }

// // // Recursion
// // const factorial = function(num) {
// //   if (num == 1) {
// //     return 1;
// //   }
// //   return num * factorial(num - 1);
// // };
// // console.log(factorial(10));

// // function countdown(n) {
// //   if (n < 0) {
// //     return false;
// //   }
// //   console.log(n);
// //   countdown(n - 1);
// // }
// // countdown(5);

// // function deepCopy(obj) {
// //   if (typeof object == "obj") {
// //     return Object.keys(object).map;
// //   }
// // }

// // const deepCopyFunction = inObject => {
// //   let outObject, value, key;

// //   if (typeof inObject !== "object" || inObject === null) {
// //     return inObject; // Return the value if inObject is not an object
// //   }

// //   // Create an array or object to hold the values
// //   outObject = Array.isArray(inObject) ? [] : {};

// //   for (key in inObject) {
// //     value = inObject[key];

// //     // Recursively (deep) copy for nested objects, including arrays
// //     outObject[key] =
// //       typeof value === "object" && value !== null
// //         ? deepCopyFunction(value)
// //         : value;
// //   }

// //   return outObject;
// // };

// // Deep copy using recursion 🤨
// function deepCopy(obj) {
//   if (typeof obj !== "object" || obj === null) {
//     return (key = obj);
//   } else if (typeof obj == "object") {
//     return Object.keys(obj)
//       .map(key => ({ [key]: deepCopy(obj[key]) }))
//       .reduce((acc, cur) => Object.assign(acc, cur), {});
//   }
//   return obj;
// }
// //const newObj = { 1: "hi", 2: "how are you", fun: () => console.log("Hi") };
// const newObj = [10, 20, 30, "life"];
// const superNewObj = deepCopy(newObj);
// // console.table(superNewObj);
// console.log(console);
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

for (let i = 0; i < programming.languages.length; ) {
  console.log(programming.languages[i]);
  i++;
}
