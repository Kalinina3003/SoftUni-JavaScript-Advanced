// Task: Extract Increasing From Array.
// Description: Extract and return numbers that are
// greater than or equal to the current biggest number.

function extractIncreasingFromArray(arr) {
    return arr.reduce((result, currentNum) => {
        if (result.length === 0 || currentNum >= result[result.length - 1]) {
            result.push(currentNum);
        }

        return result;
    }, []);
}
console.log(extractIncreasingFromArray([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]));
// [1, 3, 8, 10, 12, 24];

console.log(extractIncreasingFromArray([
    1,
    2,
    3,
    4
]));
// [1, 2, 3, 4];

console.log(extractIncreasingFromArray([
    20,
    3,
    2,
    15,
    6,
    1
]));
// [20];