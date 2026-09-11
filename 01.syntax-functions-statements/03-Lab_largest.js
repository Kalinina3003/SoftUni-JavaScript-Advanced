// Task: Largest Number.
// Description: Receive three numbers and find and print the largest one.

function largestNumber(num1, num2, num3) {
    let largestNum = Math.max(num1, num2, num3);
    console.log(`The largest number is ${largestNum}.`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);

/*
function largestNumber(num1, num2, num3) {
    let largestNum = num1;

    if (num2 > largestNum) {
        largestNum = num2;
    }

    if (num3 > largestNum) {
        largestNum = num3;
    }

    console.log(`The largest number is ${largestNum}.`);
}
*/