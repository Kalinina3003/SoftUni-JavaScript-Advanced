// Task: Greatest Common Divisor.
// Description: Receive two positive integers and calculate their greatest common divisor.

function greatestCommonDivisor(num1, num2) {
    let smaller = Math.min(num1, num2);

    for (let i = smaller; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            console.log(i);
            break;
        }
    }
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);