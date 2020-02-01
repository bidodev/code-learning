var alpha = {
  1: "Z",
  2: "Y",
  3: "X",
  4: "W",
  24: "C",
  25: "B",
  26: "A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"

console.log(alpha[value]);

// Setup
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  // Only change code above this line
  return (result = lookup[val]);
}

// Change this value to test
console.log(phoneticLookup("charlie"));
