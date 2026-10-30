// Task: Sort Array.
// Description: Sort a numeric array in ascending or descending order
// based on the provided sorting argument.

function sortArray(arr, order) {
    if (order === 'asc') {
        arr.sort((a, b) => a - b);
    } else if (order === 'desc') {
        arr.sort((a, b) => b - a);
    }

    return arr;
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
// [6, 7, 8, 14, 17];

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
// [17, 14, 8, 7, 6];