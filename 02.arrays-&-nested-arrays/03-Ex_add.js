// Task: Add and Remove Elements.
// Description: Add or remove numbers from an array
// based on the given commands.

function addRemoveElements(arr) {
    let result = [];
    let number = 1;

    for (let command of arr) {
        if (command === 'add') {
            result.push(number);
        } else if (command === 'remove') {
            result.pop();
        }

        number++;
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}
addRemoveElements(['add',
    'add',
    'add',
    'add']);
// 1 2 3 4 ('\n')

addRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']);
// 1 4 5 ('\n')

addRemoveElements(['remove',
    'remove',
    'remove']);
// Empty