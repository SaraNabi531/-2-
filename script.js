let currentNumber = "";
let previousNumber = "";
let operator = "";

const display = document.getElementById("display");

function updateDisplay() {
    display.textContent = currentNumber || "0";
}

function addNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function chooseOperator(selectedOperator) {


    if (currentNumber === "") {
        return;
    }

    previousNumber = currentNumber;
    operator = selectedOperator;

    display.textContent = currentNumber + " " + selectedOperator;
}

function calculate() {

    if (previousNumber === "" || currentNumber === "" || operator === "") {
        return;
    }

    let num1 = Number(previousNumber);
    let num2 = Number(currentNumber);
    let result;

    if (operator === "+") {
        result = num1 + num2;
    }

    else if (operator === "-") {
        result = num1 - num2;
    }

    else if (operator === "*") {
        result = num1 * num2;
    }

    else if (operator === "/") {
        result = num1 / num2;
    }

    currentNumber = String(result);
    previousNumber = "";
    operator = "";

    updateDisplay();
}

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operator = "";

    updateDisplay();
}

function deleteNumber() {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
}

function percent() {
    if (currentNumber !== "") {
        currentNumber = String(Number(currentNumber) / 100);
        updateDisplay();
    }
}