// Task: String Lengths.
// Description: Receive three strings and calculate the sum of their lengths
// and the average length rounded down to the nearest integer.

function stringLength(firstStr, secStr, thirdStr) {
    let sumOfLength = (firstStr.length + secStr.length + thirdStr.length);
    let averageLength = (sumOfLength / arguments.length);

    console.log(sumOfLength);
    console.log(Math.floor(averageLength));
}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');