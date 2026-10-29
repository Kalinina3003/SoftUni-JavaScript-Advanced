// Task: Command Processor.
// Description: Create a closure that stores a string
// and returns methods to modify and print it.

function solution() {
    let text = '';

    function append(string) {
        text += string;
    }

    function removeStart(n) {
        text = text.slice(n);
    }

    function removeEnd(n) {
        text = text.slice(0, text.length - n);
    }

    function print() {
        console.log(text);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
// loa;

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
// 34;