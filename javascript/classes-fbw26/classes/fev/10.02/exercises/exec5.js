/*
 * 5. Programming Object.

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
*/

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//  Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming);

//   Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming);

//   Using the delete keyword, write the command to remove the jokes key from the programming object.(need Google)
delete programming.jokes;
console.log(programming);

//   Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming);

//  Using a loop, iterate through the languages array and console.log all of the languages.
mylangArray = programming.languages;

for (let i = 0; i < mylangArray.length; ) {
  console.log(mylangArray[i]);
  i++;
}
//   Using a loop, console.log all of the keys in the programming object.
for (let key in programming) {
  console.log(`Key: ${key} `);
}
//   Using a loop, console.log all of the values in the programming object.
for (let key in programming) {
  console.log(`Value: ${programming[key]}`);
}

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
let myObject = {
  myMethod: function(obj) {
    if (obj.isRewarding && obj.isChallenging) {
      return `Learning the programming languages: "${programming.languages.join(
        ", "
      )}" is rewarding and challenging.`;
    }
  }
};
console.log(myObject.myMethod); //JavaScript tells us that myMethod is a function, if we want call this function we need function call ().
console.log(myObject.myMethod({ isChallenging: true, isRewarding: true }));

//  Bonus:
// Make sure that any other code cannot delete or change properties of the object.(need Google)
Object.freeze(programming);
programming.languages = "C++";
console.log(programming); //We can see that C++ wasn't include.
