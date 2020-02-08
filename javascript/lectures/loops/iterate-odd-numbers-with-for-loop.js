let numbers = {
  odd: [],
  even: [],
  prime: []
};

function isPrime(value) {
  for (var i = 2; i < value; i++) {
    console.log(i);
    console.log(value);

    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

// for (var i = 0; i < 10; i += 2) {
//   numbers.odd.push(i);
//   numbers.even.push(i + 1);
// }

for (var i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    numbers.even.push(i);
  } else {
    numbers.odd.push(i);
  }
}

// for (var i = 0; i < 10; i++) {
//   i % 2 == 0 ? numbers.even.push(i) : numbers.odd.push(i);
// }

console.log(numbers.even);
