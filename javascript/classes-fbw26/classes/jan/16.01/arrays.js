/* Exercises*/
// 1, 2, 4, 8... 128
for (let i = 1; i <= 128; ) {
  console.log(i);
  i *= 2;
}

// 0, 2, 4... 10
for (let i = 0; i < 11; ) {
  console.log(i);
  i += 2;
}

// 3, 6, 9 ... 15
for (let i = 3; i < 16; ) {
  console.log(i);
  i += 3;
}

// 9, 8, 7... 0
for (let i = 10; i >= 0; ) {
  console.log(i);
  i--;
}

// 1 1 1 2 2 2 3 3 3 4 4 4
/* cheating formula.
let string = "";

for (i = 1; i < 5; i++) {
  string += 111 * i;
}
*/

let string = "";

for (i = 1; i < 5; i++) {
  for (j = 0; j < 4; j++) {
    string += i;
  }
}
console.log(string);

// // console.log(string);
// // let string = "";

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
let box = "";
for (j = 0; j < 4; j++) {
  for (i = 0; i < 5; i++) {
    box += i;
  }
}
console.log(box);

/* Create the follow shape...
/*
AAAA
AAA
AA
A
 */
let myString = "AAAA";

for (let i = myString.length; i > 0; i--) {
  console.log(myString.substr(0, i));
}

/*
const str = "Hello world!";
let res = str.substr(0, 5);
console.log(res); //will return the word Hello

*/
/*
1 interaction: i = 4; 4 > 0 (true); console.log(myString.substr(0, 4)); i--;
2 interaction: i = 3; 3 > 0 (true); console.log(myString.substr(0, 3)); i--;
3 interaction: i = 2; 2 > 0 (true); console.log(myString.substr(0, 2)); i--;
4 interaction: i = 1; 1 > 0 (true); console.log(myString.substr(0, 1)); i--;
5 interaction: i = 0; 0 > 0 (false) 

*/

/* Create the follow shape...
t
tt
ttt
tttt
*/

let myString = "tttt";

for (let i = 0; i <= myString.length; i++) {
  console.log(myString.substr(0, i));
}
