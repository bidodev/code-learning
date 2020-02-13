/**
 * Create a Phone Number
 *
 * Write a function that takes an array of 10 integers (between 0 and 9) and returns a string in form of a phone number.
 */
const createPhoneNumber = (numbers) => {
  let number = "(xxx) xxx-xxxx";

  numbers.forEach((element) => {
    number = number.replace("x", element);
  });
  return number;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
// createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); // "(111) 111-1111"
// createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]); // "(874) 125-6582"
