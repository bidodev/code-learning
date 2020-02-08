const names = ["Ali", "Hadi", "Olga"];
let x = 1;

//Array.isArray(arr) //to check
console.log(Array.isArray(x));

//Array.includes()
console.log(names.includes("Hadi")); //to show that this is there or not.
console.log(names.indexOf("Hadi")); //to show the index num.

//Array.reserve()
// let rev = names.reverse();

//Array.concat();

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arrTotal = arr1.concat(arr2);
console.log(arrTotal);
console.log(Array.isArray(arrTotal));

//Array.filter()
let result1 = names.filter(name => name.length == 4);
console.log(result1);

//Array.find() //returns the value of the first element.

let result2 = names.find(name => name == "Hadi");
console.log(result2);

//Array.map() //creates a new array.
const intArray = [2, 3, 4, 5, 8];
let resultMap = intArray.map(x => x + 1);

console.log(resultMap);

//Array.reduce()

let object = {};
console.log(Array.isArray(object));
