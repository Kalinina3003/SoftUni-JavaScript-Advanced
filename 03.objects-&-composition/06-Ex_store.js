// Task: Create a sorted catalog of products grouped by the first letter.
// Description: Parse product names and prices, sort products alphabetically,
// group them by their initial letter, and print each group with its products.

function storeCatalogue(arr) {
    let products = [];

    for (let data of arr) {
        let [name, price] = data.split(' : ');

        products.push({
            name: name,
            price: Number(price)
        });
    }

    products.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = '';

    for (let product of products) {
        let firstLetter = product.name[0].toUpperCase();

        if (firstLetter !== currentLetter) {
            console.log(firstLetter);
            currentLetter = firstLetter;
        }

        console.log(` ${product.name}: ${product.price}`);
    }
}
storeCatalogue(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"]
);
// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499

storeCatalogue(["Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10"]
);
// B
//   Banana: 2
//   Barrel: 10
// P
//   Pesho: 0.000001
// R
//   Rali Car: 2000000
//   Raspberry P: 4999
//   Rolex: 100000
//   Rollon: 10
//   Rubic's Cube: 5