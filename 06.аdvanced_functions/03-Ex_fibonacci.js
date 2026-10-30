// Task: Fibonacci.
// Description: Generate Fibonacci numbers using a closure
// that keeps track of the current and previous numbers.

function getFibonator() {
    let first = 0;
    let second = 1;

    return function () {
        let next = first + second;
        first = second;
        second = next;

        return first;
    };
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13