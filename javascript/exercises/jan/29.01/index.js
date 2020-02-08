/**
 * Create a function will calculate how many times empty space occurred in a
 * given string by the user and print out only the characters number
 */

let givenString = "This is my";
const emptySpace = str => str.length - (str.split(" ").length - 1);
console.log(emptySpace(givenString));

// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

function taxes(name, salary, ...args) {
  let myArr = args;
  let tax = 0;

  if (myArr.length == 0) {
    tax = 55;
  } else if (myArr.length == 1) {
    tax = 30;
  } else if (myArr.length == 2) {
    tax = 25;
  } else if (myArr.length > 2) {
    tax = 20;
  }
  let calc = (salary * tax) / 100;
  if (myArr == 0) {
    kidsString = " no kids";
  } else {
    kidsString = myArr.length + ` kids`;
  }

  let composeMsg = `${name} has ${kidsString} and his finaly salary is ${salary -
    calc} EUR`;
  return composeMsg;
}
console.log(taxes("jose", 2400, "Jose", "Juca", "Joaquina", "Maria"));

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number

function isNumber(str) {
  // Convert string to lowercase
  str = str.toLowerCase().split(" ");
  //console.log(str);

  // Initialize array of months
  const prefix = ["030", "017"];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i].includes(prefix[j])) {
        let numberFound = str[i].slice(3, 10);
        //console.log(numberFound.length);
        if (numberFound.length !== 7 || isNaN(numberFound)) {
          return `Number not found on the text..`;
        } else {
          return `The number ${prefix[j] + numberFound} was found in the text!`;
        }
      }
    }
  }
}
console.log(isNumber("Once upon 0175822346 0305822346"));

/**
 *Write a function that checks whether the user has entered a valid German bank account.
 *Note: German bank accounts should starts with DE and has 20 number.
 *DExxxxxxxxxxxxxxxxxxxx
 */

const isAccount = str => {
  // Convert string to lowercase
  const strLwcase = str.toLowerCase();

  //check the prefix of the IBAN
  const prefix = ["de"];

  //get the rest of the string
  const restAccount = strLwcase.slice(2);

  //We have to slice the first two characters of the passed string
  const slicedPrefix = strLwcase.slice(0, 2);

  //we have to check if isNAN (if it's we gonna get false)
  const isNumber = !isNaN(restAccount);

  if (slicedPrefix == prefix && restAccount.length == 20 && isNumber) {
    return `Your IBAN is ${prefix.join("").toUpperCase() + restAccount}`;
  } else {
    return `Please check your IBAN`;
  }
};

console.log(isAccount("DE11111111111111121111"));
// console.log(isAccount("ae00000000000000001000"));
console.log(isAccount("DExxxxxxxxxxxxxxxxxxxx"));
// console.log(isAccount("de000000012330000001000"));
// console.log(isAccount("DExxxxxxxx123xssxxxxx"));
// console.log(isAccount("aExxxxxxxx123xssxxxxx"));
