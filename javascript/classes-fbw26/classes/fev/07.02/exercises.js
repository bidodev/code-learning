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
   * 3. Filter out Strings from an Array
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
  }
};

//console.log(myExercises.monthName(3));
//console.log(myExercises.unluckyNumber([53, 182, 435, 591, 637], 13));
//console.log(myExercises.filterList([53, "g", 435, 591, 637, "a", "b"]));
//console.log(myExercises.diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); //➞ 82
