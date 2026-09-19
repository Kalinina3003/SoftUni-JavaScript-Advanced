// Task: Sorting Numbers.
// Description: Sort numbers by alternating the smallest
// and biggest elements.

function sortingNumbers(arr) {
    arr.sort((a, b) => a - b);

    let result = [];

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        result.push(arr[left]);
        left++;

        if (left <= right) {
            result.push(arr[right]);
            right--;
        }
    }

    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48];

console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));
// [2, 63, 3, 54, 9, 22, 11, 21, 18, 19];