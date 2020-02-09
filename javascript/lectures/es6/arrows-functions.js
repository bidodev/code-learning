const double = value => value * 2;

//lets double sth..
console.log(double(2));

const myConcat = (arr1, arr2) => arr1.concat(arr2);

// test your code
console.log(myConcat([1, 2], [3, 4, 5]));

/**
 * The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.
 */
const howMany = (...args) => "You have passed " + args.length + " arguments.";

console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], {})); // You have passed 4 arguments.
