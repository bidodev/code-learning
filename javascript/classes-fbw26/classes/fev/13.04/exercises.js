/**
 * Fido says...
 *
 * In the following code, we want fido to bark. Instead, we get an error. Why?
 * Edit the code to make fido bark.
 */

class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(`${this.name} says woof`);
  }
}

let fido = new Dog("fido");
fido.bark();

/**
 *
 * Month Name
 *
 * Create a function called getMonthName, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument.
 * Example
 *
 * getMonthName(15) -> Invalid Month Number!
 */
const getMonthName = (month) => {
  try {
    if (month < 1 || month > 12) {
      throw "ERROR! This is not a valid month";
    }
  } catch (err) {
    console.log(err);
  }
};
getMonthName(15);

/**
 *  Reverse
 *  Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.
 *
 * Example
 * reverseString(2019) -> ERROR! This is not a string!
 */
const reverseStr = (str) => {
  try {
    if (typeof str !== "string") {
      throw "ERROR! This is not a string!";
    } else {
      let splitStr = str.split("");
      return splitStr.reverse().join("");
    }
  } catch (err) {
    return err;
  }
};
console.log(reverseStr(200));
