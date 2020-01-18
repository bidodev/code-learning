var myDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"]
};

//bracketnot
myDog["name"] = "Happy Bracket";
console.log(myDog["name"]);

//dot not
myDog.name = "Happy Not";
console.log(myDog.name);
