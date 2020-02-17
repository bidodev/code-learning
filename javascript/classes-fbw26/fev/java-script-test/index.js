// Answer Sheet - all answers should go here

/**
 * Create an object called "profileData". Add four key pair values to the object: name, surname, age and city.
 */
const profileData = {
  name: "Anna",
  surname: "Bido",
  age: 60,
  city: "Vigonza"
};

/**
 * Convert an object into a nested array of key pair values. Look the example below.
 */
myObj = {
  "1": 10,
  "2": 20,
  "3": 30
};

const convertObjectToArray = (obj) => {
  return Object.entries(obj);
};
console.log(convertObjectToArray(myObj));

/**
 *
 * Create a function called "createGrid", which returns a grid of a 2D array by accepting two arguments: `size` (which determines the number of nested arrays and the number of elements in each nested array) and `char`
 * (which determines the characters in each nested array). Print your solution to the console.
 */
const createGrid = (size, item) => {
  array = [];

  for (let i = 0; i < size; i++) {
    array[i] = [];

    for (let j = 0; j < size; j++) {
      array[i].push(item);
    }
  }
  return array;
};
console.log(createGrid(4, "*"));

/**
 * Create a function named "_convertArrayData_". Use array methods to manipulate the data the array below.
 * The first two items in the array should switch positions and the third item should be replaced by a new item.
 * Change the data to get the result below. Print your solution to the console.
 */
const convertArrayData = (arr, newItem) => {
  arr.splice(1, 2, arr.shift(), newItem);
  return arr;
};
console.log(convertArrayData(["coffee", "tea", "juice"], "milk"));

/**
 *  Given an array of words, create a function named "_wordConverter_" which uses an array method to add _"er"_ to the end of each string in the array. 
 *  Look at the expected output below. **Important**: Do **not** use a loop to complete this task. Print your solution to the console.

 */
const words = ["smart", "kind", "sweet", "small", "clear"];

const wordConverter = (array) => {
  return array.map((word) => word + "er");
};

console.log(wordConverter(words));

/**
 * 4. Hour Calculation
 * Create a function called "_calculateHours_" which calculate how many hours (total) this person worked in the week based on the data structure `hourTracking` below. **Note**: start is always morning time, end is always afternoon.
 * Print your solution to the console.
 */

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 }
];

const calculateHours = (hours) => {
  let result = 0;

  hours.forEach((element) => {
    result += element.end - element.start;
  });

  return result;
};
console.log(calculateHours(hourTracking));

/**
 * Classes
 * Create a blueprint for a course at DCI - using the `class` syntax in javascript. The class should be named "Course" The class should contain who the teacher is, whether the group is learning marketing or web development and the number of students taking the course.
 * The class should also have a method named "spaceNeeded" that checks how big a classroom should be depending on the number of students taking the course: 1 student = 2m². E.g. If a course has 10 students, then print: "_The classroom should be 20m²._". Print your solution to the console.
 */
class Course {
  constructor(_teacher, _course, _numstudents) {
    this.teacher = _teacher;
    this.course = _course;
    this.students = _numstudents;
  }
  spaceNeeded() {
    const SPACE_STUDENT = 2;
    const messageComposed = `The classroom should be ${this.students *
      SPACE_STUDENT} m²`;
    return messageComposed;
  }
  details() {
    //This is a web development course taught by Ali. There are 10 students taking the course
    let pluralStudents =
      this.students == 1
        ? `There is ${this.students} student`
        : `There are ${this.students} students`;
    return `This is a ${this.course} course taught by ${this.teacher}. ${pluralStudents} taking the course.`;
  }
}
let course = new Course("Ali", "web development", 10);
console.log(course.spaceNeeded());
console.log(course.details());

/**
 * Write function named "_capitalizeFirstLetter_" that accepts a string as an argument. The function should convert the first character of each word to uppercase. **Example** _the quick brown fox_ → _The Quick Brown Fox_. Print your solution to the console.
 *
 */
const capitalizeFirstLetter = (string) => {
  let arr = string.split(" ");

  result = arr.map((element) => {
    return element[0].toUpperCase() + element.slice(1);
  });

  return result.join(" ");
};
console.log(capitalizeFirstLetter("hey there"));

/* 
  Look at the unit tests for validating a pin. Create a function named "_validPin_" that fulfills the requirements of the tests.
*/
const validPin = (number) => {
  //split the original string of numbers into an array of string(numbers)
  let strNumbers = number.split("");

  //convert the string(numbers array) into an int array of numbers
  let intNumbers = strNumbers.map((element) => {
    return parseInt(element);
  });

  //check if we have two differ numbers in the array.
  let hasDiffer = intNumbers.some((element) => {
    return element != intNumbers[element + 1];
  });

  //check if the sum of all numbers isn't higher than 5
  const addUp =
    intNumbers.reduce(function(acc, current) {
      return acc + current;
    }) > 5;

  //check if the pin is even
  const isEven = number % 2 == 0;

  //check if the pin has the allowed length
  const allowedLength = number.length == 4;

  return hasDiffer && isEven && allowedLength && addUp;
};

console.log(validPin("1234")); //→ true
console.log(validPin("wwww")); //→ false // should only consist of numbers
console.log(validPin("12345")); // → false // should be 4 digits, not 5
console.log(validPin("2222")); // → false // should have at least 2 different digits
console.log(validPin("1000")); //→ false // does not add up to at least 5
console.log(validPin("2224")); // → true
console.log(validPin("224")); // → false

// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
module.exports = {
  profileData,
  convertObjectToArray,
  convertArrayData,
  createGrid,
  wordConverter,
  calculateHours,
  Course,
  capitalizeFirstLetter,
  validPin
};
