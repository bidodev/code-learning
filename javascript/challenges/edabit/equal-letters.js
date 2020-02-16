/**
 * Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
 * 
 * Return a boolean value (true or false).
 * The string can contain any character.
 * When no x and no o are in the string, return true.
 * 
 * Examples
 * XO("ooxx") ➞ true
 * XO("xooxx") ➞ false
 * XO("ooxXm") ➞ true

// Case insensitive.
XO("zpzpzpp") ➞ true

// Returns true if no x and o.
XO("zzoo") ➞ false

Notes
Remember to return true if there aren't any x's or o's.
Must be case insensitive.
 */
const XO = (string) => {
  strLower = string.toLowerCase();
  return strLower.split("x").length - 1 === strLower.split("o").length - 1;
};
console.log(XO("XoXo"));
