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
/*
const years = [1990, 1989, 2010, 1984, 1899];

const arrayCalc = (arr, fn) => {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    result.push(fn(element));
  }
  return result;
};

const calcAge = (element) => {
  return 2020 - element;
};

function isFullAge(element) {
  return element >= 18;
}

function maxHeartRate(el) {
  if (el >= 18) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

const ages = arrayCalc(years, calcAge);
console.log(ages);

const fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

//calculate the max hearth rate based on the user age
const maxRate = arrayCalc(ages, maxHeartRate);
console.log(maxRate);
*/

//Functions returning functions.
/*
function interviewQuestion(job) {
  switch (job) {
    case "designer":
      return function (name) {
        console.log(`${name}, Can you please explain what UX design is?`);
      };
    case "programmer":
      return function (name) {
        console.log(`${name}, Can you please explain what a dot is?`);
      };
  }
}

const designerQuestion = interviewQuestion("designer");
const programmerQuestion = interviewQuestion("programmer");

designerQuestion("Juca");
programmerQuestion("Pedro");

//it's evaluated left to right, interviewQuestion returns a function.
interviewQuestion("designer")("Mark");
*/

//Immediately Invoked Function Expressions (IIFE)
/*
(function () {
  const score = Math.floor(Math.random() * 10);
  console.log(`${score}`);
})();
*/

//closures
/*
function retirement(retirementAge) {
  const a = " year left until retirement.";

  return function (yearOfBirth) {
    const age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

retirement(66)(1990);

//an inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.

const retirementGer = retirement(65);
const retirementIceland = retirement(67);

retirementGer(1990);
*/

//Bind, call and apply
