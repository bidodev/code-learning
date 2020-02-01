// 1. sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers).
// Bonus: Print to screen both the sum and the product of these numbers.
let array = [1, 2, 3];
let sum = 0;
let product = 1;

for (i = 0; i < array.length; i++) {
  sum += array[i];
  product *= array[i];
}

console.log(sum);
console.log(product);

// 2. Hello Frien Create an array filled with your friends’ and family’s names.
//Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.
let friends = ["Maria", "Carla", "Marcelo", "Nanda", "Pedro"];

for (i = 0; i < friends.length; i++) {
  console.log(`Hello ${friends[i]}`);
  console.log(`${friends[i]} is at index ${i} of my friends array.`);
}

// 3. City Names. Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: “Berlin, Paris, Prague, Rome”.
const citiesNames = ["Berlin", "Paris", "Prague", "Rome"];
let newCieties = citiesNames.join(", ");

console.log(newCieties);

// Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

let givenNumbers = [6, 9, 10, 20]; //expected output: [5, 10, 9, 19]

for (i = 0; i < givenNumbers.length; i++) {
  if (givenNumbers[i] % 2 == 0) {
    givenNumbers[i] = givenNumbers[i] - 1;
  } else {
    givenNumbers[i] = givenNumbers[i] + 1;
  }
}
console.log(givenNumbers);

// Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]

let arrNames = ["matt", "SaSa", "lara"];

for (let i = 0; i < arrNames.length; i++) {
  //set the whole string to lowerCase;
  arrNames[i] = arrNames[i].toLowerCase();

  arrNames[i] = arrNames[i][0].toUpperCase() + arrNames[i].substr(1);
}
console.log(arrNames);
