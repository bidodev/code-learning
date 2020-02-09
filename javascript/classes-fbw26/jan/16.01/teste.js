for (var i = 1; i < 4; i++) {
  for (var z = 1; z < 4; z++) {
    console.log("Loop one is on: " + i + ", Loop two is on  " + z);
    // this loop completes all its steps every time the bigger loop does 1 step
  }
}

let myString = "tttt";

for (let i = 0; i <= myString.length; i++) {
  console.log(myString.substr(0, i));
}
