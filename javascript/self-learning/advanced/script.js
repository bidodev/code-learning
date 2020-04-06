// class
/*class Person {
  constructor(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
  }
  calculateAge() {
    console.log(2016 - this.birthYear);
  }
  lastName = "Smith";
}

const jahn = new Person("Jahn", 1988, "Developer");

jahn.calculateAge();

const jane = new Person("Jane", 1985, "Designer");
const mark = new Person("Mark", 1949, "Retired");

mark.calculateAge();
console.log(mark.lastName);
*/

// Object.create
/*
const personProto = {
  calculateAge() {
    console.log(2016 - this.birthYear);
  },
};

const john = Object.create(personProto);
john.name = "John";
john.birthYear = 1989;
john.job = "Designer";

const jane = Object.create(personProto, {
  name: { value: "Jane" },
  birthYear: { value: 1958 },
  job: { value: "Designer" },
});
*/

//extra about functions
//function is an instance of the Object type.
//a function behaves like any other obeject
//we can store functions in a variable.
//we can pass a function as an argument to another function.
//we can return a function from a function.

//Passing function as arguments.
const years = [1990, 1989, 2010, 1984, 1899];

function arrayCalc(arr, fn) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    result.push(fn(element));
  }
  return result;
}

function calcAge(element) {
  return 2016 - element;
}

console.log(arrayCalc(years, calcAge));
