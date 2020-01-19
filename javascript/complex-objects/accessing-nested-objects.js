// var ourStorage = {
//   desk: {
//     drawer: "stapler"
//   },
//   cabinet: {
//     "top drawer": {
//       folder1: "a file",
//       folder2: "secrets",

//       "top drawer": {
//         folder1: "a file",
//         folder2: "secrets"
//       }
//     },
//     "bottom drawer": "soda"
//   }
// };
// ourStorage.cabinet["top drawer"].folder2; // "secrets"
// ourStorage.desk.drawer; // "stapler"

// console.log(ourStorage["cabinet"]["top drawer"]["f"]);

// // Setup
// var myStorage = {
//   car: {
//     inside: {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//     },
//     outside: {
//       trunk: "jack"
//     }
//   }
// };

// var gloveBoxContents = myStorage["car"]["inside"]["glove box"]; // Change this line
// console.log(gloveBoxContents);

// Setup
var myPlants = [
  {
    categoria: "flowers",
    tipo: ["rose", "tulip", "dandelion"]
  },
  {
    categoria: "trees",
    tipo: ["fire", "pine", "birch"]
  }
];

// Retrieve the second tree from the variable myPlants using object dot and array bracket notation.
var secondTree = myPlants[0].categoria; // Change this line

console.log(secondTree);
