// Task: Same Numbers.
// Description: Check if all digits in an integer are the same 
// and calculate the sum of all digits.

function sameNumbers(num) {
    let sum = 0;
    let result = true;

    num = String(num);
    let firstNum = num[0];

    for (let j = 1; j < num.length; j++) {
        if (firstNum !== num[j]) {
            result = false;
            break;
        }
    }

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    console.log(result);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);