// Declare two variables: “a” with the value of true, and “b” with the value of false.

// Check the result of:
// a) a AND b.
// b) a OR b.
// c) NOT (a AND b).

let a, b;
a = true;
b = false;

//a
console.log(
  `The variable a has the value of ${a} and b has the value ${b}. The result of a AND b is`,
  a && b
);

//b
console.log(
  `The variable a has the value of ${a} and b has the value ${b}. The result of a || b is`,
  a || b
);

//c
console.log(
  `The variable a has the value of ${a} and b has the value ${b}. The result of not (a AND b) is`,
  !(a && b)
);

// Declare three more variables “x”, “y”, “z”. Give these variables number values.
// Check the result of whether:

// a) x is greater than z AND x is greater than y.
//console.log(`The higher value between the given numbers is`, Math.max(x, y, z));
let x, y, z;
x = 9;
y = 9;
z = 7;

console.log(
  x > z && x > y
    ? "true x is greater than z AND x is greater than y"
    : "false (a)"
);

// b) x is NOT equal to y.
console.log(
  x != y
    ? "x is NOT equal to y."
    : "Condition returned false due to X and Y have the same value."
);

// c) z is less than y OR z is greater than x.
console.log(
  z < y || z > x
    ? "z is less than y OR z is greater than x"
    : "condition returned false (c)"
);

// d) x is equal to z OR x is NOT equal to y.
console.log(
  x == z || x != y
    ? "x is equal to z OR x is NOT equal to y"
    : "condition returned false (d)"
);

// e) x is greater than or equal to 10 AND y is less than or equal to 10.
console.log(
  x >= 10 && y <= 10
    ? "x is greater than or equal to 10 AND y is less than or equal to 10"
    : "condition returned false (e)"
);

// f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.
console.log(
  x * z < 100 || x * y > 100
    ? "x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100."
    : "condition returned false (f)"
);
