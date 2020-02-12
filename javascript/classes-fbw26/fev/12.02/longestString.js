const longestWord = (string) => {
  let strSplit = string.split(" "); //we split
  console.log(strSplit);

  let biggestWord = strSplit[0]; // we consider the first element as being the biggest
  console.log(biggestWord);

  for (let i = 0; i < strSplit.length; i++) {
    //we loop through the words length
    if (strSplit[i].length > biggestWord.length) {
      //if the first word is the longest it stays, if we find another long one then the variable takes its value
      biggestWord = strSplit[i];
    }
  }
  return biggestWord;
};
console.log(longestWord("this is a web development developmentdevelopment "));
