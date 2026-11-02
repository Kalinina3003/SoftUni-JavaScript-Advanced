// Task: Functional Sum.
// Description: Create a chainable function that accumulates numbers
// and returns the current sum as a string using toString().

function add(num) {
    let sum = num;

    function innerAdd(nextNum) {
        sum += nextNum;
        return innerAdd;
    }

    innerAdd.toString = function () {
        return sum;
    };

    return innerAdd;
}
console.log(add(1).toString());
// 1;

console.log(add(1)(6)(-3).toString());
// 4;