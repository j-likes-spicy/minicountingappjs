// IDs
let increment = document.getElementById("count_add");
let decrement = document.getElementById("count_subtract");
let displayValue = document.getElementById("count_value");
const runningTotals = document.getElementById("previous_values");

// Variables
let total = 0;

// Add & Subtract Functions

const addTotal = () => {
  total += 1;
  displayValue.innerText = total;
};

const subtractTotal = () => {
  total -= 1;
  displayValue.innerText = total;
};

const logEntry = () => {
  const separator = ", ";
  runningTotals.textContent += total + separator;
};

const clearValues = () => {
  runningTotals.innerText = "";
  total = 0;
  displayValue.textContent = total;
};
