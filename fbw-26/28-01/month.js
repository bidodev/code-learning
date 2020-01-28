/* Create a function that accepts a text from user and check if the user has entered a month name,
if so print out that month and in which season it is.
*/

function isMonth(str) {
  // Convert string to lowercase
  str = str.toLowerCase().split(" ");
  // console.log(str);

  // Initialize array of months
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ];

  function season(value) {
    switch (value) {
      case "december":
      case "january":
      case "february":
        return "winter";

      case "march":
      case "april":
      case "may":
        return "spring";

      case "june":
      case "july":
      case "august":
        return "summer";

      case "september":
      case "october":
      case "november":
        return "fall";
    }
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < months.length; j++) {
      if (str[i].includes(months[j])) {
        let composestring = `The month of ${str[i]} is in the ${season(
          str[i]
        )}!`;
        return composestring;
      }
    }
  }
}

console.log(isMonth("mauricio hates june because its hot.."));
