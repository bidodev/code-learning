// Declare the variables a, b and c, and give them number values.
//Check which one out of the three variables has the largest value and print it to the console.
//Then change the values of the variables to see if your conditional still works.

meuArray = [10, 20, 30, 50, 100];

let maior = 0;

for (let i = 0; i < meuArray.length; i++) {
  if (meuArray[i] > maior) {
    maior = meuArray[i];
  }
}
console.log(`The higher number in the array is:`, maior);
