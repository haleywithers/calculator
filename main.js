const displayElement = document.querySelector('.total');
const buttons = document.querySelectorAll('.button');

let waitingForSecondNumber = false;


function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}


let firstNumber = "";      
let secondNumber = "";    
let operator = "";      
let displayValue = "0"; 




//add event listeners to button
//run a function that adds the button that was clicked to the displayElement


buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = button.textContent;

        if (value >= '0' && value <= '9' || value === '.') {

            handleNumber(value);
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {

            handleOperator(value);
        } else if (value === 'Equals') {

            handleEquals();
        } else if (value === 'Clear') {

            handleClear();
        } else if (value === 'Delete') {

            handleDelete();
        }

    })
})

function handleNumber (value) {
    if (waitingForSecondNumber) {
        displayValue = value;
        waitingForSecondNumber = false;
    }
   else if (displayValue === "0") {
            displayValue = value;
        } else {
            displayValue += value;
        }

    displayElement.textContent = displayValue;

}

function handleOperator(value) {

    if (firstNumber !== "" && operator !== "") {
        handleEquals(); 
    }

    firstNumber = displayValue
    operator = value;
    waitingForSecondNumber = true
}

function handleEquals() {
    secondNumber = displayValue;
    let result;

    if (operator === '+') {
        result = add(Number(firstNumber), Number(secondNumber));
    } else if (operator === '-') {
        result = subtract(Number(firstNumber), Number(secondNumber));
    } else if (operator === '*') {
        result = multiply(Number(firstNumber), Number(secondNumber));
    } else if (operator === '/') {
        result = divide(Number(firstNumber), Number(secondNumber));
    }

    displayValue = result;
    displayElement.textContent = displayValue;
}

function handleClear() {
    displayValue = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    waitingForSecondNumber = false;
    
    displayElement.textContent = displayValue;
}

function handleDelete() {
    displayValue = displayValue.slice(0, -1);

    if (displayValue === "") {
        displayValue = "0";
    }

     displayElement.textContent = displayValue; 
}