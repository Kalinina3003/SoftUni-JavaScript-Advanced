// Task: Piece of Pie.
// Description: Return a new array containing elements 
// from the start flavor to the end flavor.

function pieceOfPie(arr, start, end) {
    let startIndex = arr.indexOf(start);
    let endIndex = arr.indexOf(end);

    return arr.slice(startIndex, endIndex + 1);
}
console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));
console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'));