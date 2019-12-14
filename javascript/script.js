/*
var age = prompt('What is your age?');
document.getElementById('someText').innerHTML = age;
*/

//numbers in Javascript
//Increment number by 1
var number = 10;
number++;

//decrement number by 1
number--;

//Divide, multiiply *, remainder %
console.log(number / 6);

//Increment / decrement by any number you want.
number += 10;
console.log(number);

/* Functions
1. Create a function
2. Call the function
*/

function fun(){
    console.log('This is a function');
}

//call
fun();

/* Let's create a function that takes in a name and says hello followed by your name 

For example
Name: "Bido"
Return: "Hello Bido"

*/

function greeting (yourName){
    
    var result = (`Hello ${yourName}`);
    document.getElementById ('myName').innerHTML = result;

}
var name = prompt ('What is your name?');
greeting(name);
