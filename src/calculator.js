const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

const operation = {
  firstOperand: null,
  secondOperand: null,
  operationType: null,
  result: null,
};

function calculateResult(firstOperand, secondOperand, operationType) {
  if (operationType == "+") {
    return firstOperand + secondOperand;
  } else if (operationType == "-") {
    return firstOperand - secondOperand;
  } else if (operationType == "x") {
    return firstOperand * secondOperand;
  } else if (operationType == "/") {
    return firstOperand / secondOperand;
  }
}

function resetCalculator() {
  operation.firstOperand = null;
  operation.secondOperand = null;
  operation.operationType = null;
  operation.result = null;
  input.value = 0;
}

buttons.forEach((button) => {
  const value = button.innerText;
  button.addEventListener("click", () => {
    if (value === "=") {
      const { firstOperand, secondOperand, operationType } = operation;
      //something went wrong
      if (!firstOperand || !secondOperand || !operationType) return;

      operation.result = calculateResult(
        firstOperand,
        secondOperand,
        operationType
      );
      if (operation.result) {
        input.value = operation.result;
      }
    } else if (
      value === "+" ||
      value === "-" ||
      value === "x" ||
      value === "/"
    ) {
      if (!operation.firstOperand) return;
      operation.operationType = value;
    } else if (value === "C") {
      resetCalculator();
    } else {
      input.value = value;
      if (operation.result) result = null;
      if (operation.operationType && operation.firstOperand) {
        operation.secondOperand = value;
      } else {
        operation.firstOperand = value;
      }
    }
  });
});
