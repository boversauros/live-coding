const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

let operator = "";
let firstOp = "";
let secondOp = "";
let currentOp = "";

function setOperand(value) {
  if (currentOp === "0" && value !== "0") {
    currentOp = value;
  } else if (currentOp !== "0") {
    currentOp += value;
  }
  input.value = currentOp;
}

function calculate() {
  const num1 = parseInt(firstOp, 10);
  const num2 = parseInt(currentOp, 10);
  switch (operator) {
    case "+":
      input.value = num1 + num2;
      break;
    case "-":
      input.value = num1 - num2;
      break;
    case "x":
      input.value = num1 * num2;
      break;
    case "/":
      input.value = num1 / num2;
      break;
    default:
      return;
  }
  firstOp = input.value;
  currentOp = "";
  operator = "";
}

function reset() {
  operator = "";
  firstOp = "";
  currentOp = "";
  input.value = "0";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "=") {
      calculate();
    } else if (value === "C") {
      reset();
    } else if (
      value === "+" ||
      value === "-" ||
      value === "x" ||
      value === "/"
    ) {
      if (firstOp === "") {
        firstOp = currentOp;
        currentOp = "";
      }
      operator = value;
    } else {
      setOperand(value);
    }
  });
});
