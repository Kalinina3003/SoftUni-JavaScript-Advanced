// Task: Circle Area.
// Description: Receive one argument, check its type, and calculate the circle area if it is a number.
// Otherwise, print the type of the received argument.

function circleArea(data) {
    let dataType = typeof(data);

    if (dataType === 'number') {
       console.log((Math.PI * Math.pow(data, 2)).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${dataType}.`);
    }
}
circleArea(5);
circleArea('name');