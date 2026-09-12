// Task: Square of Stars.
// Description: Print a square of stars with the given size, or 5 if no size is provided.

function squareOfStars(num = 5) {
    let row = '* '.repeat(num).trim();

    for (let i = 1; i <= num; i++) {
        console.log(row);
    }
}
squareOfStars(1);
squareOfStars();
squareOfStars(5);
squareOfStars(7);