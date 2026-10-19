// Task: Find the lowest price for each product and the town where it is sold.
// Description: Parse the town, product, and price, compare prices for each
// product, and print the lowest price with its town in order of entrance.

function lowestPrices(arr) {
    let products = {};

    for (let data of arr) {
        let [town, product, price] = data.split(' | ');

        price = Number(price);

        if (!products[product]) {
            products[product] = {
                price: price,
                town: town
            };
        } else if (price < products[product].price) {
            products[product].price = price;
            products[product].town = town;
        }
    }

    for (let product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}
lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York);