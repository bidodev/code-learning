// Make a variable for firstName and age and give each variable values.
//Create an if/else statement to check whether the person’s age is less than 13.
//If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
//If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”.
//If none of these conditions apply, print “firstName is a adult”.

let firstName, age;
firstName = "Juca";
age = 20;

if (age < 13) {
  console.log(`${firstName} is a child`);
} else if (age >= 13 && age < 20) {
  console.log(`${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
  console.log(`${firstName} is a young adult`);
} else {
  console.log(`${firstName} is an adult`);
}

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
// 1. Store Mark’s and John’s mass and height in variables.
// 2. Calculate both their BMIs and store their BMIs in variables.
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
// 5. Create an if statement which prints the name and BMI of the person with the highest BMI

//Calculated using the formula: BMI = mass / (height * height).
function calculateBmi(mass, height) {
  return mass / (height * height);
}

//Store Mark’s and John’s mass and height in variables.
let mark = { firstName: "Mark", mass: 72.5, age: 50, height: 1.65 };
let john = { firstName: "John", mass: 50, age: 50, height: 1.7 };

const message = {
  higherBmi: `Has the higher BMI`
};

//2. Calculate both their BMIs and store their BMIs in variables.
let markBmi = calculateBmi(mark.mass, mark.height);
let johnBmi = calculateBmi(john.mass, john.height);

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let maisGordo;
markBmi > johnBmi ? (maisGordo = true) : (maisGordo = false);

// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
console.log(maisGordo ? "Mark is fat" : "John is fat");

// 5. Create an if statement which prints the name and BMI of the person with the highest BMI
if (markBmi > johnBmi) {
  console.log(mark.firstName, message.higherBmi);
} else {
  console.log(john.firstName, message.higherBmi);
}
