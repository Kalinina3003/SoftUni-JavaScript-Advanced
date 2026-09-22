// Task: Sort Array by Length.
// Description: Sort strings by length and alphabetically.

function sortArray(arr) {
    arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    console.log(arr.join('\n'));
}
sortArray(['alpha',
    'beta',
    'gamma']
);
// beta alpha gamma; (\n)

sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
// Jack Isacc George Theodor Harrison; (\n)

sortArray(['test',
    'Deny',
    'omen',
    'Default']
);
// Deny omen test Default; (\n)