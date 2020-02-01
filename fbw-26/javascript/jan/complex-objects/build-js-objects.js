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

var myDog = {
  name: "Lulu",
  legs: 4,
  tails: 1,
  friends: ["water", "cat"]
};

//2. Add a new enemy and print it out..
myCat.enemies.push("water");

//3. Print out the cat enemies..
for (i = 0; i < myCat.enemies.length; i++) {
  console.log(myCat.enemies[i]);
}
