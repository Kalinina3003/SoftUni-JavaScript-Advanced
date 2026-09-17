// Task: Words Uppercase.
// Description: Extract all words from a string, convert them to upper case,
// and print them separated by ", ".

function wordsUppercase(str) {
    let words = str.match(/\b\w+\b/g);

    console.log(words.map(word => word.toUpperCase()).join(', '));
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');