let givenString = "This is my";

const a = str => str.split("x").length - 1;
const b = str => str.split("o").length - 1;

let result = a(givenString);
let result1 = b(givenString);

console.log(result === result1 ? true : false);
