const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let operation = "";
let firstValue = null;
let secondValue = null;

function doOperation(firstVal, secondVal, operation) {
  if (operation === "+") {
    return firstVal + secondVal;
  } else if (operation === "-") {
    return firstVal - secondVal;
  } else if (operation === "*") {
    return firstVal * secondVal;
  } else {
    return firstVal / secondVal;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if ((value === "+") | (value === "-") | (value === "*") | (value === "/")) {
      if (firstValue) {
        operation = value;
      }
    } else if (value === "=") {
      if (!firstValue && !secondValue && !operation) return;
      const firstVal = parseInt(firstValue);
      const secondVal = parseInt(secondValue);
      const result = doOperation(firstVal, secondVal, operation);
      input.value = result;
      operation = "";
      firstValue = result;
      secondValue = null;
    } else {
      input.value = value;
      if (!firstValue || !operation) {
        firstValue = value;
      } else {
        secondValue = value;
      }
    }
  });
});
