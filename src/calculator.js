const buttons = document.querySelectorAll("button");
const display = document.querySelector("input");

function calculate(num1, num2, operator) {
  if (!num1 || !num2 || !operator) return;

  const operations = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "*": (num1, num2) => num1 * num2,
    "/": (num1, num2) => num1 / num2,
  };

  return operations[operator](num1, num2).toString();
}

function setDisplayValue(value) {
  display.value = value;
}

function handleButtonClick(value, state) {
  if (value === "C") {
    state = {
      num1: "0",
      num2: "0",
      operator: "",
      displayValue: "0",
    };
    setDisplayValue(state.displayValue);
  } else if (value === "=") {
    state.num2 = state.displayValue;
    const num1 = parseFloat(state.num1);
    const num2 = parseFloat(state.num2);
    const result = calculate(num1, num2, state.operator);
    state = { num1: result, num2: "0", operator: "", displayValue: result };
  } else if (["+", "-", "*", "/"].includes(value)) {
    if (state.num1 === "") {
      state.num1 = state.displayValue;
      state.displayValue = "0";
    }
    state.operator = value;
  } else {
    // setNumber
    if (state.displayValue === "0" && value !== "0") {
      state = { ...state, displayValue: value };
      console.log("heree", newState);
    } else if (state.displayValue !== "0") {
      const newValue = state.displayValue + value;
      state = { ...state, displayValue: newValue };
    }
    setDisplayValue(state.displayValue);
  }
}

// calculator state
let state = {
  num1: "0",
  num2: "0",
  operator: "",
  displayValue: "0",
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleButtonClick(e.target.value, state);
  });
});
