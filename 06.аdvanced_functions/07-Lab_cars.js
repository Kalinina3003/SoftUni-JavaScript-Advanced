// Task: Cars.
// Description: Create and modify objects using a closure,
// supporting inheritance, property assignment, and printing
// both own and inherited properties.

function cars(commands) {
    const cars = {};

    for (const command of commands) {
        const [action, name, key, value] = command.split(' ');

        if (action === 'create') {
            if (command.includes(' inherit ')) {
                const parentName = command.split(' ')[3];
                cars[name] = Object.create(cars[parentName]);
            } else {
                cars[name] = {};
            }
        } else if (action === 'set') {
            cars[name][key] = value;
        } else if (action === 'print') {
            const properties = [];

            for (const property in cars[name]) {
                properties.push(`${property}:${cars[name][property]}`);
            }

            console.log(properties.join(','));
        }
    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);
// color:red
// model:new,color:red