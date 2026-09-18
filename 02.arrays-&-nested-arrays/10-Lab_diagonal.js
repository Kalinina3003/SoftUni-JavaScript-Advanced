// Task: Diagonal Sums.
// Description: Calculate and print the sums of the main 
// and secondary diagonals.

function diagonalSums(matrix) {
    let mainSum = 0;
    let secondarySum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                mainSum += matrix[row][col];
            }

            if (row + col === matrix.length - 1) {
                secondarySum += matrix[row][col];
            }
        }
    }

    console.log(mainSum, secondarySum);
}
diagonalSums(
    [[20, 40],
    [10, 60]]
);                  // 80 50
diagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);                  // 99 25