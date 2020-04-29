const operations = document.querySelector(".operations");
const firstNumber = document.querySelector(".firstNumber");
const secondNumber = document.querySelector(".secondNumber");

function doMath(event) {
  //prevent form from submitting
  //event.preventDefault();
  //console.log(event);

  const item = event.target;
  const button = event.keyCode;

  const stNumber = firstNumber.value;
  const ndNumber = secondNumber.value;

  if (item.className === "plus" || button === 43) {
    const result = stNumber + ndNumber;

    alert(`The plus result is ${result}`);
  }
  if (item.className === "times" || button === 42) {
    const result = stNumber * ndNumber;

    alert(`The result is ${result}`);
  }
  if (item.className === "division" || button === 47) {
    const result = stNumber / ndNumber;

    alert(`The result is ${result}`);
  }
  if (item.className === "minus" || button === 45) {
    const result = stNumber - ndNumber;

    alert(`The result is ${result}`);
  }
}

operations.addEventListener("click", doMath);
document.body.addEventListener("keypress", doMath);

//todo list
// get the string from the input and convert into int.
// clear the fields after result appears
//change the logic on how it get the values and do the result
// display the value in the UI instead of the alert shitty msg
