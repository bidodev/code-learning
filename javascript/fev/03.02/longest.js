/**
 * Create a function wich return the longest word inside the array..
 *
 */

const words = [
  "leao",
  "nenekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
  "jose",
  "josue mauri",
  "kkkkkkkkkkkkkkkkkkkkkkkkkk",
  "mwhahhaahhhahahhahahahahhahahahahahahhahaahah"
];

const longestStr = arg => {
  //create a new array to save array passed to the parameter.
  let originalArr = arg;

  //other array to save the lenghts of the words from the originalArray.
  let lenghtArr = [];

  let indexBigger = 0;
  //console.log(originalArr);

  for (let i = 0; i < originalArr.length; i++) {
    lenghtArr.push(originalArr[i].length); //first we have to save the lenght of all thw words inside the lenghtArr.
  }
  //console.log(lenghtArr);

  indexBigger = lenghtArr.indexOf(Math.max(...lenghtArr)); //We check the new array for the bigger number and return the index of this number..
  //console.log(indexBigger);

  return originalArr[indexBigger]; //We return the word which has this index from the originalArray.
};

console.log(longestStr(words));
