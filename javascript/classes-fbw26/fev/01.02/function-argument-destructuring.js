/**
 * In some cases, you can destructure the object in a function argument itself.
 */

//Consider the code below:

// const profileUpdate = profileData => {
//   const { name, age, nationality, location } = profileData;
//   // do something with these variables
// };

// const profileUpdate = ({ name, age, nationality, location }) => {
//   /* do something with these fields */
// };

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// use function-argument-destructuring
const half = ({ max, min }) => (max + min) / 2.0;
// change code above this line

console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
