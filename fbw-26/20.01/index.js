let arrStr = ["hi", "text", "newText"];
console.log(arrStr);

let arrInt;
arrInt = [];

console.log(arrInt);
arrInt[0] = 22;
arrInt[1] = 22;

console.log(arrInt);

//new Array()
let arrString = new Array(3);

console.log(arrString);

let newString = Array.of(3);
console.log(newString);

//accssing using square brackets..
arrInt[0] = 33;
arrInt.push(663);
arrInt.unshift(523);

console.log(arrInt);

//finding items:
//Array indexOf(items);

var firstNameArr = ["Ali", "Olga", "Hadi"];
check = firstNameArr.includes("Ali");

console.log(check);
console.log(firstNameArr.indexOf("Ali"));

let funArr = ["😎", "💪🏻", "😊", ""];
console.log(funArr);

//for
let myNewFuckArray = [];

for (i = 0; i <= 10; i++) {
  myNewFuckArray.push(i);
}
console.log(myNewFuckArray);

var newArray = ["River", "Lake"];
console.log(newArray[0].substring(0, 2));

let otherArray = ["Juca", "foi", "para", "o", "intervalo."];
let newS = otherArray.join(" ");

console.log(otherArray[1]);
console.log(newS[1]);
