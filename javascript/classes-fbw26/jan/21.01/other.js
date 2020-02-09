const array = [3, 3, 3, 7, 3, 3];

for (i = 0; i < array.length; i++) {
  if (array[i] == array[1]) {
    console.log("Oi", array[i]);
  } else {
    array.find(array[i] != 3);
  }
}
