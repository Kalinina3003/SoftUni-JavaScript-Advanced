// Task: Biggest Element.
// Description: Find and return the biggest element in a 2D matrix.

function biggestElement(matrix) {
    let biggest = matrix[0][0];

    for (let row of matrix) {
        for (let element of row) {
            if (element > biggest) {
                biggest = element;
            }
        }
    }
    
    return biggest;
}
console.log(biggestElement(
    [[20, 50, 10],
    [8, 33, 145]]
));
console.log(biggestElement(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));