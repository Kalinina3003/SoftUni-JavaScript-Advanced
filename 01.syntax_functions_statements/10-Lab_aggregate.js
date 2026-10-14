// Task: Array Operations.
// Description: Receive an array of numbers and calculate their sum,
// the sum of their inverse values, and concatenate their string representations.

function aggregateElements(arr) {
    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    for (let num of arr) {
        sum += num;
        inverseSum += 1 / num;
        concat += String(num);
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}
aggregateElements([1, 2, 3]);
// 6; 1.8333333333333333; 123;

aggregateElements([2, 4, 8, 16]);
// 30; 0.9375; 24816;