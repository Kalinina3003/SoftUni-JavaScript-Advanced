// Task: Last Number Sequence.
// Description: Generate a sequence where each element 
// is the sum of the previous k elements.

function lastNumSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        for (let j = 1; j <= k && i - j >= 0; j++) {
            sum += sequence[i - j];
        }

        sequence.push(sum);
    }

    return sequence;
}
console.log(lastNumSequence(6, 3));
console.log(lastNumSequence(8, 2));