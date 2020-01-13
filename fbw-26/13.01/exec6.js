// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

function check(a, b) {
  if (a + b == 8 || a - b == 8) {
    console.log("True");
  } else {
    console.log("False");
  }
}

check(16, 8);
