// Task: Argument Info.
// Description: Display the type and value of each argument,
// and count the occurrences of each type in descending order.

function argumentInfo(...args) {
    const types = {};

    for (const arg of args) {
        const type = typeof arg;

        console.log(`${type}: ${arg}`);

        if (!types[type]) {
            types[type] = 0;
        }

        types[type]++;
    }

    Object.entries(types)
        .sort((a, b) => b[1] - a[1])
        .forEach(([type, count]) => {
            console.log(`${type} = ${count}`);
        });
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1