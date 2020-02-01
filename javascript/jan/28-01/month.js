/** Create a function that accepts a text from user and check if the user has entered a month name,
 * if so print out that month and in which season it is.
 */

//first let's grab our text
const myText = `So never mind the darkness
We still can find a way
'Cause nothin' lasts forever
Even cold rain`;

function isMonth(str) {
  //let's split our text
  const arrText = str.toLowerCase().split(" ");

  let composeString = "We couldn't find any month..";

  //create a object with our months.
  const months = {
    winter: ["december", "january", "february"],
    spring: ["march", "april", "may"],
    summer: ["june", "july", "august"],
    fall: ["september", "october", "november"]
  };

  //Object.entries(obj) produces an array with each name:value pair as an array
  try {
    Object.entries(months).map(([key, month]) => {
      for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < arrText.length; j++) {
          if (month[i] === arrText[j]) {
            //create the msg for the user
            composeString = `The month of ${arrText[j]} is located in the season ${key}.`;
          }
        }
      }
    });
  } catch (error) {
    console.error(error.message);
  }
  //return our final string..
  return composeString;
}

//call the function
console.log(isMonth(myText));
