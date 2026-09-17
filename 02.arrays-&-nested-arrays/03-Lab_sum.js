// Task: Sum First and Last Elements.
// Description: Calculate and return the sum of the first 
// and last elements in an array.

function sumFirstLast(arr) {
    let firstElement = Number(arr[0]);
    let lastElement = Number(arr[arr.length - 1]);

    return firstElement + lastElement;
}
console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));