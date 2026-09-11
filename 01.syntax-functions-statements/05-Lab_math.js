// Task: Calculator.
// Description: Receive two numbers and an operator, 
// perform the specified mathematical operation, and print the result.

function mathOperations(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        case '%':
            console.log(num1 % num2);
            break;
        case '**':
            console.log(num1 ** num2);
            break;
    }
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');