// Task: Fruit Price.
// Description: Receive fruit type, weight in grams, and price per kilogram.
// Calculate the total price and print the weight in kilograms and money,
// both rounded to two decimal places.

function fruit(typeOfFruit, weightInGrams, pricePerKilo) {
    let weightPerKilo = weightInGrams / 1000;
    let money = weightPerKilo * pricePerKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${weightPerKilo.toFixed(2)} kilograms ${typeOfFruit}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);