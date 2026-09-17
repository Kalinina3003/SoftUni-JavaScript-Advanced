// Task: Even Position Elements.
// Description: Find the elements at even positions in an array 
// and print them separated by spaces.

function evenPositionElements(arr) {
    let result = '';

    for (let i = 0; i < arr.length; i += 2) {
        result += arr[i] + ' ';
    }

    console.log(result);
}
evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);

/*
function evenPositionElements(arr) {
    console.log(arr.filter((element, index) => index % 2 === 0).join(' '));
*/
