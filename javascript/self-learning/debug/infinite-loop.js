//The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start.
//Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.

/* function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
*/
const myFunction = () => {
  //we have declared our variable with var in porpouse! We want make it global to the scope to see the difference of i inside and out of the loop.
  var i = 1; //i is global to the function, but can't be acessed out of the function scope.
  for (i; i <= 4; i += 2) {
    console.log("DEBUG: myFunction -> i", i);
    console.log("Still going!");
  }
  //Now i out of loop has the value of 5.
  console.log(i);
};
//We can't acess i out of the function, it has not be declared yet in the global scope.
//console.log(i);
myFunction();
