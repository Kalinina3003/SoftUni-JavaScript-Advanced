// Task: Print Every Element.
// Description: Return every N-th element of an array,
// starting from the first element.

function printEveryElement(arr, step) {
    let result = [];

    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }

    return result;
}
console.log(printEveryElement(['5', '20', '31', '4', '20'], 2));
// ['5', '31', '20']

console.log(printEveryElement(['dsa', 'asd', 'test', 'tset'], 2));
// ['dsa', 'test']

console.log(printEveryElement(['1', '2', '3', '4', '5'], 6));
// ['1']