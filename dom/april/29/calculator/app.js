let userInput = document.querySelector(".calc-typed");
let calcOperation = document.querySelector(".calc-operation");
let buttons = document.querySelectorAll(".calc-button-row");

const values = [];

//const array1 = [1, 2, 3, 4];

// expected output: 10

const result = () => {
  let res = values[0];

  values.forEach((element, index) => {
    switch (element) {
      case "+":
        res += values[index + 1];
        break;
      case "x":
        res *= values[index + 1];
        break;
      case "-":
        res -= values[index + 1];
        break;
      case "/":
        res /= values[index + 1];
        break;
    }
  });
  return res;
};

const clearInput = () => (userInput.textContent = "");

function buttonsValue(event) {
  //1. get the value from the user either from the click or keyboard
  if (event.type == "click") {
    value = event.target.innerText;
    values.push(value);
    // if (values.length !== 3) {
    //   values.push(value);
    // } else {
    //   result();
    //   console.log("");
    // }

    // calcOperation.textContent += value;
    // userInput.textContent += value;
  } else if (event.type == "keypress") {
    values.push(event.key);
    // if (!isNaN(event.key)) {
    //   values.push(event.key);
    // } else {
    //   operations.push(event.key);
    // }
    //calcOperation.textContent += event.key;
  }
  console.log(values);
  //const teste = [66, "+", 10, "x", 10, "-", 10, "/", 10];

  // switch (value) {
  //   case "C":
  //     clearInput();
  //     break;
  //   case "+":
  //     result = values[0] + values[1];
  //     // userInput.textContent = value;
  //     break;
  // }

  //2. update the gui with this values

  //3. give the result

  //console.log("Value", value);
  //update GUI
  //calcOperation.textContent += event.key;

  //   console.log("buttonsValue -> Values", values);
  //   console.log("buttonsValue -> Operations", operations);
}

buttons.forEach(row => {
  row.addEventListener("click", buttonsValue);
});

document.body.addEventListener("keypress", buttonsValue);
