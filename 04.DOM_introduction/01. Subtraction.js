// Task: Subtraction
// Description: Subtract the second input number from the first and display 
// the result in the result div.

function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);

    let result = firstNumber - secondNumber;
    document.getElementById('result').textContent = result;
}
