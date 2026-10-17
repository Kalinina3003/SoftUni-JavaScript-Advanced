// Task: Magic Matrix.
// Description: Check if all row and column sums are equal.

function magicMatrices(matrix) {
    let magicSum = 0;

    for (let num of matrix[0]) {
        magicSum += num;
    }

    for (let row = 0; row < matrix.length; row++) {
        let rowSum = 0;

        for (let col = 0; col < matrix[row].length; col++) {
            rowSum += matrix[row][col];
        }

        if (rowSum !== magicSum) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;

        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }

        if (colSum !== magicSum) {
            return false;
        }
    }

    return true;
}
console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
// true;

console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
// false;

console.log(magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));
// true;