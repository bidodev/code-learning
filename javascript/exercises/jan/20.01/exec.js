// Declare a variable named “euroCities” and assign an array to the variable e.g. [“Paris”, “London”, “Valletta”, “Prague”, “Rome”].
// Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

let anotherVar = euroCities[1];
console.log(anotherVar);

// Change the first item in the array to “Berlin”.
euroCities[0] = "Berlin";
console.log(euroCities);

// Print the length of the array “euroCities”.
console.log(euroCities.length);
// Remove the last item of the array “euroCities”.

let removeLast = euroCities.pop();
console.log(euroCities);
// Use an array method to add “Budapest” to the euroCities array.
euroCities.push("Budapest");
console.log(euroCities);

// Create another variable named asianCities and assign an array of at least 5 cities to the variable.
let asianCities = [];
asianCities = ["Tokyo", "Delhi", "Seoul", "Hong Kong", "Bangkok"];
console.log(asianCities);

//7. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let selectAsian = asianCities.splice(1, 3);

// console.log(selectedAsianCiets);
console.log(selectAsian);
