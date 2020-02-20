// const userData = {
//   firstName: "Hadi",
//   lastName: "Nsreeny",
//   get printOut() {
//     //this is a getter method.
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
//   //this is a setter method.
//   /**
//    * @param {(arg0: string) => void} str
//    */
//   set fullName(str) {
//     let arr = str.split(" ");
//     this.firstName = arr[0];
//     this.lastName = arr[1];
//   }
// };
// userData.printOut;
// userData.fullName = "Meu Nome";
// userData.printOut;
// class User {
//   constructor(name, last, age) {}
// }
// function Person(name, age, activities) {
//   this.name = name;
//   this.age = age;
//   this.activities = activities;
// }
// let ali = new Person("Ali", 22, ["party", "dance"]);
// console.log(ali);
class Human {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastName = lastname;
    this.userAge = age;
    this.printOut = function() {
      console.log(`Hello ${this.name} ${this.lastName}`);
    };
  }
}

let juca = new Human("Juca", "Fernandez", 20);
let marcelo = new Human("Marcelo", "Peralta");

juca.printOut();
marcelo.printOut();

class Animals {
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown;
  }
  display() {
    console.log(
      `It is a very cute ${this.kind}, and lives in this ${this.hometown}`
    );
  }
}

const casper = new Animals("Dog", "La");
const sofi = new Animals("Fish", "Berlin");
casper.display();
sofi.display();

class Color {
  constructor() {
    this.name = "";
    this.age = 0;
    this.birthDay = 0;
  }
}

const red = new Color();
red.name = "Red";
red.age = "125";
console.log(red);
