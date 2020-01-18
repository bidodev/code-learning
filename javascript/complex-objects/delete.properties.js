// Example
var myCat = {
  name: "Tommy",
  legs: 4,
  tails: 1,
  friends: ["everything!"]
};

myCat.bark = "meow-meow";

// Setup
var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["water", "cat"],
  enemies: ["sofa", "table"]
};

myDog["bark"] = "woof";

// console.log(myDog);
// console.log(myCat);

//delete properties which we added before.
delete myDog.bark;
delete myCat.bark;

console.log(myCat);

//trying to console a property which has been already deleted.
console.log(myCat["bark"]); //should return undefined
