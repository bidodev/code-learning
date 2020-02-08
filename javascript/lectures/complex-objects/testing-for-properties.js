var myObj = {
  top: "hat",
  bottom: "pants"
};

console.log(myObj.hasOwnProperty("top")); // true
console.log(myObj.hasOwnProperty("middle")); // false

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

// Test your code by modifying these values
console.log(checkObj("gift"));
