// Task: List Processor.
// Description: Create a closure that processes a list of strings
// by adding, removing all occurrences, and printing its elements.

function listProcessor(commands) {
    const list = [];

    for (const command of commands) {
        const [action, value] = command.split(' ');

        if (action === 'add') {
            list.push(value);
        } else if (action === 'remove') {
            while (list.includes(value)) {
                list.splice(list.indexOf(value), 1);
            }
        } else if (action === 'print') {
            console.log(list.join(','));
        }
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
// again,again;

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
// pesho,george;