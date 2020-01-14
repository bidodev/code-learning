/*
Objects are similar to arrays, except that instead of using indexes to access and modify their data, 
you access the data in objects through what are called properties.
*/

/*
1. Create a Object and name it cat
*/
let myCat = {
  name: "Juca",
  legs: 4,
  tails: 1,
  enemies: ["dog", "rat"]
};

//2. Print out the cat enemies..
console.log(myCat.enemies);

//3. Add a new enemy and print it out..
myCat.enemies["water"];
console.log(myCat.enemies);
