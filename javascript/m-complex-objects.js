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

// Only change code below this line

var secondTree = ""; // Change this line
