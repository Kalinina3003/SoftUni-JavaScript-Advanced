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

/*   // the Euclidean algorithm;
function greatestCommonDivisor(num1, num2) {
    while (num2 !== 0) {
        let remainder = num1 % num2;

        num1 = num2;
        num2 = remainder;
    } 

    console.log(num1);
}
*/
