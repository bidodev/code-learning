//Exercises

//1, 2, 4, 8... 128
let result = null;

for (let i = 0; result < 128; i++) {
  result = 2 ** i; //exponentiation operator
  console.log(result);
}

// 1, 2, 4, 8... 128
for (let i = 1; i <= 128; ) {
  console.log(i);
  i *= 2;
}
