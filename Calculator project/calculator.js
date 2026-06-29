// 1. Unified function to handle the calculation safely
function calculateResult() {
    const display = document.calc.display;
    let expression = display.value;

    // Check if the user is trying to divide by zero textually
    if (expression.includes('/0')) {
        display.value = "0";
    } else {
        try {
            let result = eval(expression);
            
            // Catch cases where result turns into Infinity, NaN, or is undefined
            if (result === Infinity || isNaN(result) || result === undefined) {
                display.value = "0";
            } else {
                display.value = result;
            }
        } catch (error) {
            display.value = "0"; // Handles any other syntax errors gracefully
        }
    }
}

// 2. Keyboard Event Listener
document.addEventListener('keydown', function (event) {
    const display = document.calc.display;
    const key = event.key;

    // Prevent default actions for keys we handle
    if (['/', '*', '-', '+', 'Enter', 'Backspace', 'Escape'].includes(key)) {
        event.preventDefault();
    }

    // Handle Numbers and Decimal
    if ((key >= '0' && key <= '9') || key === '.') {
        display.value += key;
    }

    // Handle Operators
    else if (['+', '-', '*', '/'].includes(key)) {
        display.value += key;
    }

    // Handle Enter key or '=' key from keyboard
    else if (key === 'Enter' || key === '=') {
        calculateResult(); // Calls our safe calculation function
    }

    // Handle Backspace (DEL)
    else if (key === 'Backspace') {
        display.value = display.value.toString().slice(0, -1);
    }

    // Handle Escape key (Clear/AC)
    else if (key === 'Escape') {
        display.value = '';
    }
});