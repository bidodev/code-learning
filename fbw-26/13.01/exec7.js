// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

function check(a, b) {
  let sum = a + b;

  if (sum == 15 || a == 15 || b == 15) {
    console.log("True");
  } else {
    console.log("False");
  }
}

check(7, 8);
