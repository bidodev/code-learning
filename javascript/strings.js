//Strings in Javascript (common methods)

let fruit = 'banana';
let moreFruits = 'banana\napple'; //new line.

const length = fruit.length
console.log(length)

const slice = fruit.slice(2,6);
console.log(slice);

const replace = fruit.replace('ban', '123');
console.log(replace);

const uppercase = fruit.toUpperCase();
console.log(uppercase);

const split = fruit.split(''); //split by characters
console.log(split);

const split = fruit.split(','); //split by comma.
console.log(split);