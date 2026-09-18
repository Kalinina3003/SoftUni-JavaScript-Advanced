// Task: Print Array with Delimiter.
// Description: Print array elements separated by a given delimiter.

function printArrayWithDelimiter(arr, delimiter) {
    console.log(arr.join(delimiter));
}
printArrayWithDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');
// One-Two-Three-Four-Five

printArrayWithDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_');
// How about no?_I_will_not_do_it!