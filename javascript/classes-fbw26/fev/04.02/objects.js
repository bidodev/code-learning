// const myObject = {
//   1: "Hadi",
//   2: "Ali",
//   3: "Olga"
// };
// /**
//  * key is a property.
//  */

// // let aliName = "Ali";
// // let aliAdd = "xxx str";
// // let aliAge = 22;
// // let aliLastName = "";
// // Object Implementation

// const user = {
//   firstName: "Philip",
//   lastName: "Obosi",
//   contributions: 200,
//   country: "Nigeria",
//   role: "Frontend",
//   languagesSpoken: ["English", "Igbo", "French"]
// };

// const object = {
//   color: "Red",
//   size: "Big",
//   year: 1990,
//   arr: [1, 2, 3, 4, 5, 6, 7]
// };

// //coll for

// for (let key in object) {
//   console.log(`Key: ${key} : ${object[key]}`);
//}

// Object.entries()

// //object keys
// const person = {
//   name: "Zain",
//   age: 20,
//   birthYear: 2000,
//   print: function(x, y) {
//     return x + y;
//   },
//   old: () => {
//     return 2020 - person.birthYear;
//   }
// };
// console.table(Object.keys(person));

// //object values
// console.log(Object.values(person));

// //Object.entries()
// for (let [key, value] of Object.entries(person)) {
//   console.table(`${key}:${value}`);
// }

// //Methods
// console.log(person.print(2, 5));
// console.log(person.old());

// //object.assign

// const obj1 = {
//   1: 2,
//   2: 300
// };
// const obj2 = {
//   1: 4,
//   3: 3224
// };
// const totalObj = Object.assign({ name: "Nancy" }, obj2, obj1);

// console.log(totalObj);

//Object.defineProperty()

Object.defineProperty(person, "birthday", {
  value: 20,
  writable: true
});
console.log(person.birthday);

Object.defineProperties(person, {
  p1: {
    value: 33,
    writable: true
  },
  p2: {
    value: 2500,
    writable: false
  },
  p3: {}
});

console.log(person);
