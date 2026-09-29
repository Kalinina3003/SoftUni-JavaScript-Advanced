// Task: Create a rectangle object with dimensions, color, and area calculation.
// Description: Create an object with width, height, and capitalized color properties,
// and add a calcArea() method that returns the rectangle's area.

function rectangle(width, height, color) {
    let rectangle = {
        width: width,
        height: height,
        color: color[0].toUpperCase() + color.slice(1),

        calcArea() {
            return this.width * this.height;
        }
    };

    return rectangle;
}
let rect = rectangle(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
// 4 5 Red 20; (\n)