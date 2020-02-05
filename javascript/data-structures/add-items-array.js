/**
 * An array's length, like the data types it can contain, is not fixed.
 * Arrays can be defined with a length of any number of elements, and elements can be added or removed over time.
 * In other words, arrays are mutable. In this challenge, we will look at two methods with which we can programmatically modify an array:
 * Array.push() and Array.unshift().
 *
 * Both methods take one or more elements as parameters and add those elements to the array the method is being called on;
 * the push() method adds elements to the end of an array, and unshift() adds elements to the beginning.
 */

let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];

romanNumerals.unshift("XIX", "XX");
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data
