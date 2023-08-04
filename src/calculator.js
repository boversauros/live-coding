const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

let firstValue = "";
let secondValue = "";
let operator = "";
let currentValue = "";

function reset() {
  firstValue = "";
  secondValue = "";
  operator = "";
  currentValue = "";
}

function calculate(n1, n2, op) {
  const num1 = parseFloat(n1);
  const num2 = parseFloat(n2);

  switch (op) {
    case "+":
      input.value = num1 + num2;
      break;
    case "-":
      input.value = num1 - num2;
      break;
    case "*":
      input.value = num1 * num2;
      break;
    case "/":
      input.value = num1 / num2;
      break;
    default:
      return;
  }

  firstValue = input.value;
  currentValue = "";
  operator = "";
}

buttons.forEach((button) => {
  const value = button.innerHTML;

  button.addEventListener("click", () => {
    if (value === "AC") {
      reset();
      input.value = "0";
    } else if (
      (value === "+") |
      (value === "-") |
      (value === "*") |
      (value === "/")
    ) {
      if (firstValue === "") {
        firstValue = currentValue;
        currentValue = "";
      }
      operator = value;
    } else if (value === "=") {
      calculate(firstValue, currentValue, operator);
    } else {
      if (currentValue === "0" && value !== "0") {
        currentValue = value;
      } else if (currentValue !== "0") {
        currentValue += value;
      }
      input.value = currentValue;
    }
  });
});
