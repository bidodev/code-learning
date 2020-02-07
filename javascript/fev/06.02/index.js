// function newUser(name, lName, age, hope) {
//   let result = {
//     firstName: name,
//     lastName: lName,
//     old: age,
//     funThingsToDo: hope
//   };
//   return result;
// }
// newUser("Ali", "st", 22, "dance");
// // const person = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   id: 5566,
// //   fullName: function() {
// //     return this.firstName + " " + this.lastName;
// //   }
// // };
// console.log(person.fullName());
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = function() {
      console.log(`Name: ${this.firstName} ${this.lastName}`);
    };
  }
}

let john = new Person("John", "Reid");
john.displayName();
