//Array.filter()

let names = ["Ali", "Nancy", "Olga", "Hadi"];
result = names.filter((name) => name.length > 4);
console.log(result);

//Array find
result = names.find((name) => name.length === 4);
console.log(result);

//map
names.map((element) => console.log(element));

//reduce
let numbers = [2, 4, 6, 8, 10];
result = numbers.reduce((acc, element) => {
  return acc + element / numbers.length;
});

console.log(result);

//array.sort
let letters = ["a", "d", "k", "j"];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
