let userInput = document.querySelector(".calc-typed");
let buttons = document.querySelectorAll(".calc-button-row");

const values = [];
const operations = [];

const clearInput = () => (userInput.textContent = "");

const result = () => {};

function buttonsValue(event) {
  if (event.type == "click") {
    console.log(event.target.innerText);
    return;
  }
  if (event.type == "keypress") {
    console.log(event.key);
    return;
  }

  //console.log("Value", value);
  //update GUI
  //userInput.textContent += value;

  //   console.log("buttonsValue -> Values", values);
  //   console.log("buttonsValue -> Operations", operations);
}

buttons.forEach(row => {
  row.addEventListener("click", buttonsValue);
});

document.body.addEventListener("keypress", buttonsValue);
