// // // // /**
// // // //  * Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
// // // //  *
// // // //  */

// // // // //Object person
// // // // const person = {
// // // //   firstName: "Philip",
// // // //   age: 30,
// // // //   lastName: "Obosi",
// // // //   contributions: 200,
// // // //   country: "Nigeria",
// // // //   gender: "Male",
// // // //   role: "Frontend",
// // // //   height: 170,
// // // //   languagesSpoken: ["English", "Igbo", "French"]
// // // // };

// // // // for (let prop in person) {
// // // //   console.log(`${prop} ${person[prop]}`);
// // // // }

// // // // for (let [key, value] of Object.entries(person)) {
// // // //   console.log(`Property: ${key}, Value: ${value}`);
// // // // }

// // // //
// // // /**
// // //  * Get Values. Create a function that returns an array of all values of an object’s properties.

// // //   getObjectValues({
// // //   choice1: "tea",
// // //   choice2: "coffee",
// // //   choice3: "milk"
// // // })
// // // //  */
// // // const obj = {
// // //   choice1: "tea",
// // //   choice2: "coffee",
// // //   choice3: "milk"
// // // };

// // // // const getObjectValues = arr => {
// // // //   let valuesArr = [];
// // // /**
// // // //  * Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
// // // //  *
// // // //  */

// // // // //Object person
// // // // const person = {
// // // //   firstName: "Philip",
// // // //   age: 30,
// // // //   lastName: "Obosi",
// // // //   contributions: 200,
// // // //   country: "Nigeria",
// // // //   gender: "Male",
// // // //   role: "Frontend",
// // // //   height: 170,
// // // //   languagesSpoken: ["English", "Igbo", "French"]
// // // // };

// // // // for (let prop in person) {
// // // //   console.log(`${prop} ${person[prop]}`);
// // // // }

// // // // for (let [key, value] of Object.entries(person)) {
// // // //   console.log(`Property: ${key}, Value: ${value}`);
// // // // }

// // // //
// // // /**
// // //  * Get Values. Create a function that returns an array of all values of an object’s properties.

// // //   getObjectValues({
// // //   choice1: "tea",
// // //   choice2: "coffee",
// // //   choice3: "milk"
// // // })
// // // //  */
// // // const obj = {
// // //   choice1: "tea",
// // //   choice2: "coffee",
// // //   choice3: "milk"
// // // };

// // // // const getObjectValues = arr => {
// // // //   let valuesArr = [];

// // // //   for (let value in arr) {
// // // //     valuesArr.push(arr[value]);
// // // //   }
// // // //   console.log(valuesArr);
// // // // };

// // // // getObjectValues(obj);

// // // // for (let value in obj) {
// // // //   return obj[value];
// // // // }

// // // console.log(Object.values(obj));

// // // /**
// // //  * Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// // //  * Example of Expected Output “Ali is a 20 year old  in Berlin”.

// // //  */

// // // let person = {
// // //   firstName: "Ali",
// // //   job: "painter",
// // //   age: 20,
// // //   city: "Berlin",
// // //   print: () =>
// // //     `${person.firstName} is a ${person.age} years old and he lives in ${person.city}`
// // // };

// // // console.log(person.print());

// // /**
// //  * List Properties. Create a function that returns an array of properties of a javascript object.
// // Example
// // let student = {
// //   name: "Mike",
// //   class: "4A"
// //   course: "English"
// // }
// // Expected output:
// // ["name", "class", "course"]
// //  */

// // // const student = {
// // //   name: "Mike",
// // //   class: "4A",
// // //   course: "English"
// // // };

// // // const getProperties = value => Object.getOwnPropertyNames(value);

// // // console.log(getProperties(student));

// // //countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2

// // // let result = new Object();

// // // let str = "tteerrr";
// // // // // let test = str.split("t").length - 1;
// // // // console.log(test);

// // // let test = "";

// // // for (let i = 0; i < str.length; i++) {
// // //   console.log(str.split(str[i]).length - 1);

// // // }

// // // // let otherArray = [];

// // // // let old = 0;

// // // // for (let i = 0; i < newArr.length; i++) {
// // // //   if (newArr[i] === newArr[i + 1]) {
// // // //     result[newArr[i]] = old++;
// // // //   }
// // // // }

// // // // console.log(result);
// // // // //output 1: t / 1: r / 2: e / 2 r

// // let result = new Object();

// // let myStr = "Maa";
// // let myArr = myStr.split("");

// // console.log(myArr);

// // function countOccurrences(str, letter) {
// //   let myArrStr = str.split("");
// //   let occurrences = 0;

// //   for (let i = 0; i < myArrStr.length; i++) {
// //     if (myArrStr[i] === letter) {
// //       occurrences++;
// //       // result[newArr[i]] = old++;
// //     }
// //   }
// //   console.log(occurrences);
// // }

// // for (let i = 0; i < myArr.length; i++) {
// //   countOccurrences(myStr, myArr[i]);
// // }

// // // console.log(
// // //   myArr.filter((value, index, self) => self.indexOf(value) !== index)
// // // );

// let givenStr = "Haii";

// const countLetters = str => {
//   let myArr = str.split("");
//   // console.log("TCL: myArr", myArr);

//   let count = {};

//   myArr.map(function(index) {
//     count[index] = (count[index] || 0) + 1;

//     // console.log((count[index] || 0) + 1);
//     // console.log("TCL: count[index]", count[index]);
//     //
//     // console.log("TCL: index", index);
//     // console.log("TCL: count", count);
//   });

//   return count;
// };

// console.log(countLetters(givenStr));

// // function countOccurrences(str, letter) {
// //   let myArrStr = str.split("");
// //   let occurrences = 0;

// //   for (let i = 0; i < myArrStr.length; i++) {
// //     if (myArrStr[i] === letter) {
// //       occurrences++;
// //     }
// //   }
// //   console.log(occurrences);
// // }
// // countOccurrences("this is a string mamamia", "t");

// // // //     valuesArr.push(arr[value]);
// // // //   }
// // // //   console.log(valuesArr);
// // // // };

// // // // getObjectValues(obj);

// // // // for (let value in obj) {
// // // //   return obj[value];
// // // // }

// // // console.log(Object.values(obj));

// // // /**
// // //  * Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// // //  * Example of Expected Output “Ali is a 20 year old  in Berlin”.

// // //  */

// // // let person = {
// // //   firstName: "Ali",
// // //   job: "painter",
// // //   age: 20,
// // //   city: "Berlin",
// // //   print: () =>
// // //     `${person.firstName} is a ${person.age} years old and he lives in ${person.city}`
// // // };

// // // console.log(person.print());

// // /**
// //  * List Properties. Create a function that returns an array of properties of a javascript object.
// // Example
// // let student = {
// //   name: "Mike",
// //   class: "4A"
// //   course: "English"
// // }
// // Expected output:
// // ["name", "class", "course"]
// //  */

// // // const student = {
// // //   name: "Mike",
// // //   class: "4A",
// // //   course: "English"
// // // };

// // // const getProperties = value => Object.getOwnPropertyNames(value);

// // // console.log(getProperties(student));

// // //countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2

// // // let result = new Object();

// // // let str = "tteerrr";
// // // // // let test = str.split("t").length - 1;
// // // // console.log(test);

// // // let test = "";

// // // for (let i = 0; i < str.length; i++) {
// // //   console.log(str.split(str[i]).length - 1);

// // // }

// // // // let otherArray = [];

// // // // let old = 0;

// // // // for (let i = 0; i < newArr.length; i++) {
// // // //   if (newArr[i] === newArr[i + 1]) {
// // // //     result[newArr[i]] = old++;
// // // //   }
// // // // }

// // // // console.log(result);
// // // // //output 1: t / 1: r / 2: e / 2 r

// // let result = new Object();

// // let myStr = "Maa";
// // let myArr = myStr.split("");

// // console.log(myArr);

// // function countOccurrences(str, letter) {
// //   let myArrStr = str.split("");
// //   let occurrences = 0;

// //   for (let i = 0; i < myArrStr.length; i++) {
// //     if (myArrStr[i] === letter) {
// //       occurrences++;
// //       // result[newArr[i]] = old++;
// //     }
// //   }
// //   console.log(occurrences);
// // }

// // for (let i = 0; i < myArr.length; i++) {
// //   countOccurrences(myStr, myArr[i]);
// // }

// // // console.log(
// // //   myArr.filter((value, index, self) => self.indexOf(value) !== index)
// // // );

// let givenStr = "Haii";

// const countLetters = str => {
//   let myArr = str.split("");
//   // console.log("TCL: myArr", myArr);

//   let count = {};

//   myArr.map(function(index) {
//     count[index] = (count[index] || 0) + 1;

//     // console.log((count[index] || 0) + 1);
//     // console.log("TCL: count[index]", count[index]);
//     //
//     // console.log("TCL: index", index);
//     // console.log("TCL: count", count);
//   });

//   return count;
// };

// console.log(countLetters(givenStr));

// // function countOccurrences(str, letter) {
// //   let myArrStr = str.split("");
// //   let occurrences = 0;

// //   for (let i = 0; i < myArrStr.length; i++) {
// //     if (myArrStr[i] === letter) {
// //       occurrences++;
// //     }
// //   }
// //   console.log(occurrences);
// // }
// // countOccurrences("this is a string mamamia", "t");

function countLetters(str) {
  let arr = str.split("");
  console.log(arr + "Chr Array ");
  let result = {};
  function countOccurrences(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        // ABC == B
        counter++;
      }
    }
    return counter;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i]; // B
    // the magic line 💪🏻
    result[currentChar] = countOccurrences(str, currentChar); // this is an inner function
  } // ABC , B
  // {
  //  A: 1
  //  B:
  // }
  return result;
}

console.log(countLetters("ABC"));
