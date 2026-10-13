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
// 5;

greatestCommonDivisor(2154, 458);
// 2;

/*
function greatestCommonDivisor(num1, num2) {
    while (num2 !== 0) {
        let remainder = num1 % num2;

        num1 = num2;
        num2 = remainder;
    } 

    console.log(num1);
}
*/

// the Euclidean algorithm; алгоритм Евклида;
// GCD (Greatest Common Divisor) - Наибольший Общий Делитель (НОД);
// The GCD of two numbers will not change if the larger number is replaced by the remainder of dividing the larger number by the smaller one.
// 'НОД двух чисел не изменится, если большее число заменить остатком от деления большего числа на меньшее'.
