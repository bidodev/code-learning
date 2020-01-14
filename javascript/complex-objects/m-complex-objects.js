var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true
  },
  // Add record here
  {
    artist: "Metallica",
    title: "Black Album",
    release_year: 1991,
    formats: ["CD", "8T", "LP"],
    gold: true
  }
];
console.log(myMusic); //print all our objects inside the array

// Accessing Nested Objects
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    outside: {
      trunk: "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // assign the value of car.inside[glove box] into the variable gloveBoxContents

//check if we do have the right value before continue..
console.log(gloveBoxContents);

//print out the value of car.outside.jack.trunk
console.log(myStorage.car.outside.trunk);

// Accessing Nested Arrays
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];

var secondTree = myPlants[1].list[1];
//first we do acess the array myPlants. We have a object on index 0 and other on the index 1.
//If we want to acess tree we have to go to the second object (index 1)
//To acess the second plant, we have to get the item on the index 1

console.log(secondTree);
