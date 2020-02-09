// 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.

const myString = "I can walk in the park all day!";
let findIndex = myString.indexOf("park");

console.log(myString.substr(findIndex, 4)); //print the letter in the index position plus 4 letters.

// Javascript exercises on String : Compare Strings
// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” 
// if both the values match else display the message “Password do not match”

let password = prompt("Insert your password");
let confirmPassword = prompt("Insert again your password");

(password === confirmPassword) ? alert("Password validated") : alert ("Password do not match");

// Javascript exercises on string : Calculate the length of the string
// Get an input from the user using the prompt box and display the length of the string.
// e.g “Parvez Ansari” should output will be 13.

// Do this by writing your own method. Do not use the string.length property
 let newString = prompt("Insert your string");

function getStringLength(string) {
    let index = 0;

    while(string[index] !== undefined){
        index++;
    }
    return index;
}

alert(getStringLength(newString));

// Javascript exercises on string : Reverse the string
// Get an input from the user using the prompt box and reverse the string.
// e.g “Parvez” should return “zevrap”.

// Write your own method. Do not use the string.reverse() method

function reverseString(str) {
    let reversedString = "";

    for (index = str.length - 1; index >= 0; index--){
        reversedString += str[index];
        console.log(index);

    }
    return reversedString;
}
let insertString = prompt("Please give a string to reverse...")

alert(reverseString(insertString));