function fun(str) {
  //new Object
  const counts = {};
  let firstChar, counter;

  let myArr = str.split("");
  //console.log("DEBUG: fun -> myArr", myArr);

  for (i = 0; i < myArr.length; i++) {
    firstChar = myArr[i];
    //console.log("DEBUG: fun -> firstChar", firstChar);

    counter = counts[firstChar];
    console.log("DEBUG: fun -> counter", counter);

    counter ? counter++ : (counter = 1);
    // counter ? console.log("true") : console.log("false");

    counts[firstChar] = counter;
  }
  return counts;
}
console.log(fun("dadada"));
let counter;

if (counter) {
  console.log("if");
} else {
  console.log("else");
}
