// Task: Add.
// Description: Create a closure that remembers a number
// and returns a function that adds another number to it.

function solution(number) {
    function add(value) {
        return number + value;
    }

    return add;
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
// 7; 8;

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
// 9; 10;