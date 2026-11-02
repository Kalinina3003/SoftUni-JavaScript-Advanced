// Task: Calculator.
// Description: Create a calculator object that initializes DOM elements
// and adds or subtracts their numerical values.

function calculator() {
    let firstNum;
    let secondNum;
    let result;

    return {
        init(selector1, selector2, resultSelector) {
            firstNum = document.querySelector(selector1);
            secondNum = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },

        add() {
            result.value = Number(firstNum.value) + Number(secondNum.value);
        },

        subtract() {
            result.value = Number(firstNum.value) - Number(secondNum.value);
        }
    };
}
