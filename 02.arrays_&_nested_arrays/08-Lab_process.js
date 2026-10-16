// Task: Process Odd Positions.
// Description: Take elements at odd positions, double them, 
// and return them in reverse order.

function processOddPositions(arr) {
    return arr
        .filter((element, index) => index % 2 !== 0)
        .map(element => element * 2)
        .reverse()
        .join(' ');
}
console.log(processOddPositions([10, 15, 20, 25]));
// 50 30;

console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
// 6 8 0;

/*
function processOddPositions(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i += 2) {
        result.unshift(arr[i] * 2);
    }

    return result.join(' ');
}
*/    