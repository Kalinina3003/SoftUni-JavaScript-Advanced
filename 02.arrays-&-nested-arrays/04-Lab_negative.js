// Task: Negative / Positive.
// Description: Process array elements and add negative numbers to the front,
// and positive numbers or zero to the end of a new array.

function negativePositiveNumbers(arr) {
    let result = [];

    for (let element of arr) {
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    console.log(result.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);