/* using foor loop
let names = ["Hello", "Juca", "Pedro"];

function reverseString(str) {
  let result = [];

  for (i = 0; i < names.length; i++) {
    //push inside the result
    result.push(
      str[i]
        .split("")
        .reverse()
        .join("")
    );
  }
  return result;
}
console.log(reverseString(names));
*/

//using .map
let names = [`Hello`, `Juca`, `Pedro`];

function reverseString(array) {
  let result = array.map(str =>
    str
      .split("")
      .reverse()
      .join("")
  );

  return result;
}

console.log(names);
console.log(reverseString(names));

//
const nomeDoGato = "Max";
const output = `Era uma vez um "gato" chamado ${nomeDoGato}`;

console.log(output);
