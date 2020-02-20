const myExercises = {
  /**
   *Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. 
   For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
   */
  monthName: function(month) {
    const MY_MONTHS = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const userMsg = `The number ${month} correspond to the month of ${
      MY_MONTHS[month - 1]
    }`;
    return userMsg;
  },
  /**
   * Given a sorted array of numbers, remove any numbers that are divisible by number.
   * Return the amended array.
   */
  unluckyNumber: function(arr, number) {
    let newArr = arr;
    let resultArr = [];
    newArr.map(element => {
      if (element % number !== 0) {
        resultArr.push(element);
      }
    });
    return resultArr;
  },
  /**
   * Filter out Strings from an Array
   * Create a function which filters out strings from an array and returns a new array containing only integers.
   */
  filterList: function(arr) {
    result = arr.filter(element => typeof element === "number");
    return result;
  },

  diffMaxMin: function(arr) {
    /**
     * The new spread operator is a shorter way of writing the apply solution to get the maximum of an array:
     * However, both spread (...) and apply will either fail or return the wrong result if the array has too many elements, because they try to pass the array elements as function parameters.
     * See Using apply and built-in functions for more details.
     * The reduce solution does not have this problem.
     */
    return Math.max(...arr) - Math.min(...arr);
  },

  /**
   * Add Up
   * Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10
   */
  addUp: function(number) {
    let result = 0;
    for (let i = 0; i <= number; i++) {
      result += i;
    }
    return result;
  },
  /**
   * Create a function that takes in three numbers and returns the sum of its cubes.
   */
  sumOfCubes: function(...number) {
    let result = 0;
    number.forEach(element => {
      result += element ** 3;
    });
    return result;
  },
  /**
   * Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
   */
  stringCheck: function(str, word) {
    return str.slice() === word.slice(0, str.length);
  },

  /**
   * Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
   */
  isLesEqZer: function(num) {
    return num <= 0;
  },

  /**
   * Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string. 

   */
  countOcurr: function(str, letter) {
    return str.split(letter).length - 1;
  }
};

//console.log(myExercises.monthName(3));
//console.log(myExercises.unluckyNumber([53, 182, 435, 591, 637], 13));
//console.log(myExercises.filterList([53, "g", 435, 591, 637, "a", "b"]));
//console.log(myExercises.diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); //➞ 82
//console.log(myExercises.addUp(600));
//console.log(myExercises.sumOfCubes(1, 5, 9));
//console.log(myExercises.stringCheck("trip", "triplet"));
//console.log(myExercises.isLesEqZer(10));
//console.log(myExercises.countOcurr("this is a string", "i"));
