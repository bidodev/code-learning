/**
 * ES6: Use class Syntax to Define a Constructor Function
 * ES6 provides a new syntax to create objects, using the class keyword.
 * It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
 * In ES5, we usually define a constructor function and use the new keyword to instantiate an object.
 */

// var SpaceShuttle = function(targetPlanet) {
//   this.targetPlanet = targetPlanet;
// };
// var zeus = new SpaceShuttle("Jupiter");
// console.log(zeus);

//ES6
class SpaceShuttle {
  constructor(targetPlanet, otherPlanet) {
    this.targetPlanet = targetPlanet;
    this.otherPlanet = otherPlanet;
  }
}
const zeus = new SpaceShuttle("Jupiter", "Pluton");

console.log(zeus);

//
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); // => should be 'carrot'
