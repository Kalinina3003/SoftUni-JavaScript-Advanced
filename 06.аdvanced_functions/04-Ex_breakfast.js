// Task: Breakfast Robot.
// Description: Manage ingredient stocks and prepare meals using a closure,
// preserving the available quantities between commands.

function solution() {
    const storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function (command) {
        const [action, element, quantity] = command.split(' ');

        if (action === 'restock') {
            storage[element] += Number(quantity);
            return 'Success';
        }

        if (action === 'prepare') {
            const recipe = recipes[element];
            const amount = Number(quantity);

            for (const ingredient in recipe) {
                const needed = recipe[ingredient] * amount;

                if (storage[ingredient] < needed) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (const ingredient in recipe) {
                storage[ingredient] -= recipe[ingredient] * amount;
            }

            return 'Success';
        }

        if (action === 'report') {
            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        }
    };
}
let manager = solution();

console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));

// Success
// Error: not enough carbohydrate in stock
// Success
// Success
// Success
// Success
// Success
// protein=0 carbohydrate=4 fat=3 flavour=55

manager = solution();

console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));

// Error: not enough protein in stock
// Success
// Error: not enough carbohydrate in stock
// Success
// Error: not enough fat in stock
// Success
// Error: not enough flavour in stock
// Success
// Success
// protein=0 carbohydrate=0 fat=0 flavour=0