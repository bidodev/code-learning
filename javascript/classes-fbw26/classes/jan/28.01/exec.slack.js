/*
Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
i.e. countOccurrences(“this is a string”, “i”) ➞ 3
*/
function countOccurrences(str, letter) {
  let myArrStr = str.split("");
  let occurrences = 0;

  for (let i = 0; i < myArrStr.length; i++) {
    if (myArrStr[i] === letter) {
      occurrences++;
    }
  }
  console.log(occurrences);
}
countOccurrences("this is a string mamamia", "t");

/*
f
Create a function which calculates how old a dog is in doggie years. 
The function should accept one argument that is the puppy’s age in human years. 
Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”
*/
const dogAge = puppyAge => {
  let humanAge = 7;
  return `Your doggo is ${puppyAge * humanAge} years old in dog years!`;
};

console.log(dogAge(4));
/*
A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for a lifetime supply of your favourite snack. 
The function should accept two arguments: age and amount per day. 
The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result.
i.e.
calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”
*/

const calcSupply = (age, dailyAmount) => {
  restOflife = (80 - age) * 365;

  return `You will need ${Math.round(
    restOflife * dailyAmount
  )} bars of chocolate (${dailyAmount} a day) to last you til the age of 80`;
};

console.log(calcSupply(25, 2.3));
