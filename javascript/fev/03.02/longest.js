/**
 * Create a function wich return the longest word inside the array..
 *
 */

const words = [
  "leao",
  "mwhahhaahahahahahhahaahah",
  "jose",
  "josue mauri",
  "mwhahhaahahahahahhahaabah",
  "hehhehe",
  "hehhe"
];

const longestStr = arg => {
  //create a new array to save array passed to the parameter.
  const originalArr = arg;

  //other array to save the lenghts of the words from the originalArray.
  const lenghtArr = [];

  let indexBigger = 0;
  //console.log(originalArr);

  for (let i = 0; i < originalArr.length; i++) {
    lenghtArr.push(originalArr[i].length); //first we have to save the lenght of all thw words inside the lenghtArr.
  }
  //console.log(lenghtArr);

  //return the bigger number inside the array.
  let lengthBigger = Math.max(...lenghtArr);

  indexBigger = lenghtArr.indexOf(Math.max(lengthBigger)); //We check the new array for the bigger number and return the index of this number..
  //console.log(indexBigger);

  const composeMessage = `The bigger word is ${originalArr[indexBigger]} it has ${lengthBigger} letters and it's located in the index ${indexBigger}.`;

  return composeMessage; //We return the word which has this index from the originalArray.
};

console.log(longestStr(words));
