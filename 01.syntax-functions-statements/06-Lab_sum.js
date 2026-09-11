// Task: Sum of Numbers.
// Description: Receive two numbers as strings, parse them, 
// and calculate the sum of all numbers from n to m.

function sumOfNumbers(n, m) {
    let startNum = Number(n);
    let endNum = Number(m);

    let result = 0;

    for (let i = startNum; i <= endNum; i++) {
        result += i;
    }

    console.log(result);
}
sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');