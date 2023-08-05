const buttons = document.querySelectorAll("button");
const display = document.querySelector("input");

let firstValue = "";
let secondValue = "";
let operator = null;
let current = "";

function calculate() {
  if (!operator || !firstValue || !secondValue) return;

  const num1 = parseFloat(firstValue);
  const num2 = parseFloat(secondValue);
  let res = 0;

  switch (operator) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num1 / num2;
      break;
    default:
      return;
  }

  firstValue = res.toString();
  secondValue = "";
  current = "";
  operator = null;
  display.value = res.toString();
}

buttons.forEach((button) => {
  const value = button.innerText;

  button.addEventListener("click", () => {
    if (value === "C") {
      // reset everything
      firstValue = "";
      secondValue = "";
      operator = null;
      current = "";
      display.value = "0";
    } else if (value === "=") {
      secondValue = current;
      calculate();
      // calculate
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      // add operator
      if (firstValue === "") {
        firstValue = current;
        current = "";
      } else if (firstValue && current) {
        secondValue = current;
        calculate();
      }

      operator = value;
    } else {
      // add number
      if (current === "0" && value !== "0") {
        current = value;
      } else if (current !== "0") {
        current += value;
      }

      display.value = current;
    }
  });
});
