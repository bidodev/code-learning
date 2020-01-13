// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

function check(intNumber) {
  let difference = intNumber - 19;

  if (intNumber > 19) {
    console.log(`Doubled difference:`, difference * 2);
  } else {
    console.log(`Normal difference:`, difference);
  }
}

check(21);
