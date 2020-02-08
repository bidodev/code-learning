/**
 * ES6: Use Destructuring Assignment to Extract Values from Objects
 */

//ES 5
const user = { name: "John Doe", age: 34 };

// const name = user.name; // name = 'John Doe'
// const age = user.age; // age = 34

//ES 6
// Equivalent assignment statement using the ES6 destructuring syntax:
const { name, age } = user;
// name = 'John Doe', age = 34

const anotherUser = { name: "John Doe", age: 34 };
const { name: userName, age: userAge } = anotherUser;

console.log(userName);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

//console.log(yesterday) // should be not defined
console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80
