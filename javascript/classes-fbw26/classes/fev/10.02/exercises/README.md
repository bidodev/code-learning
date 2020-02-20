# Solutions

- [Exercise 1](exec1.js)
- [Exercise 2](exec2.js)
- [Exercise 3](exec3.js)
- [Exercise 4](exec4.js)
- [Exercise 5](exec5.js)
- [All Exercises in one file](exercises.js)

# objects-ex

1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

Examples:

4, { min: 0, max: 5 }) ➞ true
4, { min: 4, max: 5 }) ➞ true
4, { min: 6, max: 10 }) ➞ false
5, { min: 5, max: 5 }) ➞ true

---

2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

---

3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
   Examples:

{} ➞ true
{a: 1} ➞ false

---

4. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

Examples:
freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

---

5. Programming Object.

const programming = {
languages: ["JavaScript", "Python", "Ruby"],
isChallenging: true,
isRewarding: true,
difficulty: 8,
jokes:
"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

1. Write the command to add the language "Go" to the end of the languages array.
2. Change the difficulty to the value of 7.
3. Using the delete keyword, write the command to remove the jokes key from the programming object.(need Google)
4. Write a command to add a new key called isFun and a value of true to the programming object.
5. Using a loop, iterate through the languages array and console.log all of the languages.
6. Using a loop, console.log all of the keys in the programming object.
7. Using a loop, console.log all of the values in the programming object.

8. Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

---

Bonus:
Make sure that any other code cannot delete or change properties of the object.(need Google)
