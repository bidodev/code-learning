//Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

function check(intOne, intTwo) {
  let sum = intOne + intTwo;

  if (intOne === intTwo) {
    console.log(sum * 3);
  } else {
    console.log(sum);
  }
}

check(1, 2);
