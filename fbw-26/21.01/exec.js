// //Make an array of your siblings’ names or your favorite movie characters’ names.
const mySiblings = ["Claudir", "Fatima"];

// Make an array of your parents’ names.
const myParents = ["Francesco", "Anna"];

// Combine these two arrays.
meCombinedArray = mySiblings.concat(myParents);
console.log(meCombinedArray);

// Add your pets’ names.
myPetNames = ["Bilu", "Juca"];

finalArray = meCombinedArray.concat(myPetNames);
console.log(finalArray);

// Reverse the order of the array.
let reverse = finalArray.reverse();
console.log(reverse);

// Access one of your parents’ names.
let ismyParent = finalArray.find(name => name == "Francesco");
console.log(ismyParent);

// Update the name of one of your parents.
myParentIndex = finalArray.indexOf(ismyParent);
finalArray[myParentIndex] = "Ferdinando";

console.log(finalArray);

//1.Reverse the string: “JavaScript”.
let str = "JavaScript";
console.log(
  str
    .split("")
    .reverse()
    .join("")
);
// Write your own method. Do not use the string.reverse() method

function reverseString(str) {
  let reversedString = "";

  for (index = str.length - 1; index >= 0; index--) {
    reversedString += str[index];
    //console.log(index);
  }
  return reversedString;
}
console.log(reverseString("Javascript"));
