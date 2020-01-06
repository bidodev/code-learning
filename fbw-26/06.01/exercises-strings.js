// // // // 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
// // // const myString = "I can walk in the park all day!";

// // // // 2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
// // // let myHello = "Hello world";
// // // console.log(myHello.toUpperCase());

// // // // 3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
// // // let myEarth = "Earthlings";
// // // console.log(myEarth.toLowerCase());

// // // // 4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
// // // let myCutedMessage = "“JavaScript”";
// // // console.log(myCutedMessage.substring(4, 7));

// // // // 5. Check if the sentence “nice shoes” contains the letter l.
// // // let checkInclude = "nice schoes";
// // // console.log(checkInclude.includes("l"));

// // // // 6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
// // // let originalString = "Javascript";
// // // let firstCharacter = originalString[0];

// // // console.log(firstCharacter + originalString + firstCharacter);

// // // // //Hausaufgaben
// // // // //alternative method using shift and pop and split
// // // // let result = originalString.split("");
// // // // console.log(result);

// // // console.log(result[5]);

// // let myString = "This is a long str";
// // console.log(myString.substring(myString.length - 3));

// // //.slice
// // let sliceString = myString.slice(2);
// // console.log (sliceString);

// // //his $(`lastName`)

// // let firstName = "Claudinei";
// // let lastName = "Bido";
// // let address = "Barbarrosastr 57, 10781 Berlin";
// // let niceText = `Hi ${firstName} nice that you live in ${address}, my door has my family name ${lastName}.`;

// // console.log(niceText);

// // //global vs local variable
// // var globalVar = "This is a global variable...";


// // function sum (){
// //     let localVar = "This is my local variable";
// //     console.log(globalVar);
// //     console.log(localVar);
// // }

// // sum();

// //Hoisting
// //console.log

// // console.log(myVar);
// // var myVar = 0;

// // let num1 = 1;
// // console.log(num1);

// let i = 0;

// newVar = i++;

// console.log(newVar);

// // ++variable increments the variable, returning the new value.
// // variable++ increments the variable, but returns the old value.
// // --variable decrements the variable, returning the new value.
// // variable-- decrements the variable, but returns the old value.

// // for (let i = 0; i < 10; i++){
// //     console.log(i)
// // }

// // // 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// // let originalStr = "JavaScript";
// // let slicedStr = originalStr.slice(originalStr.length - 3);

// // console.log(slicedStr);

// // console.log(`This is my newString: ${slicedStr + originalStr + slicedStr}`);

// // // 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.
// // let myVariable = "This is my Javascript string..";
// // let toUpperCase = myVariable.toUpperCase();

// // console.log(toUpperCase);

// // console.log(toUpperCase.includes("Java"));

// //9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
// let myString = "JavaScript";
// let firstCharacter = myString[0];
// let lastCharacter = myString[myString.length - 1];

// let SlicedString = myString.substring(1, myString.length - 1);

// console.log(lastCharacter + SlicedString + firstCharacter);


// //10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.
// let firstName = "Maria";
// let wohnOrt = "Berlin";
// let meinBeruf = "Teacher";

// console.log (`My name is ${firstName} and I live in ${wohnOrt} I work as ${meinBeruf}`);


//11. Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let string = "the quick brown fox";

console.log(string[0].toUpperCase() + string.substring(1));
