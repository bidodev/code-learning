/*function palindrome(string) {

    var word = string.toLowerCase();
    //console.log(word); return level

    var reverse = word.split('');
    console.log(`This is the result after split our word ${reverse}`);

    reverse.reverse();
    console.log(`This is the result after we reserve our word ${reverse}`);

    result = reverse.join('');
    console.log(`This is the result after we join our reversed word ${result}`);

    //now we only need to check if the original word is the same as the reserved word.
    return result === word;
  }

  console.log(palindrome("lol")); //should return true
  console.log(palindrome("daddy")); //should false
  */


  var word = "mamae";

  var result = "";

  for (var i = word.length - 1; i >= 0; i--){
      result += word[i];
      console.log (result);
  }

  //console.log(word);
  //console.log(cuvantIntors);