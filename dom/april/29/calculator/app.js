let userInput = document.querySelector(".calc-operation");
let buttons = document.querySelectorAll(".calc-button-row");

const values = [];
const operations = [];

const clearInput = () => (userInput.textContent = "");

const result = () => {};
function buttonsValue(event) {
  const value = event.target.innerText;
  const item = event.target;

  console.log("Event target:", event.target);
  console.log("Event target value:", value);
  //console.log("Value", value);
  //update GUI
  userInput.textContent += value;

  //console.log(value);
  switch (value) {
    case "C":
      clearInput();
      break;

    case "/":
      values.push(userInput.value.slice(0, userInput.value.length - 1));
      operations.push(userInput.value.slice(userInput.value.length - 1));
      clearInput();
      break;

    case "x":
      values.push(userInput.value.slice(0, userInput.value.length - 1));
      operations.push(userInput.value.slice(userInput.value.length - 1));
      clearInput();
      break;

    case "=":
      result();
      break;
  }
  //   console.log("buttonsValue -> Values", values);
  //   console.log("buttonsValue -> Operations", operations);
}

buttons.forEach(row => {
  row.addEventListener("click", buttonsValue);
});
