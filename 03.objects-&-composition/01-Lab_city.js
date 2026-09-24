// Task: City Record.
// Description: Create and return an object with city name, 
// population, and treasury.

function cityRecord(cityName, population, treasury) {
    let city = {
        name: cityName,
        population: population,
        treasury: treasury
    };

    return city;
}
console.log(cityRecord('Tortuga', 7000, 15000));
// {
//   name: 'Tortuga',
//   population: 7000,
//   treasury: 15000
// }

console.log(cityRecord('Santo Domingo', 12000, 23500));
// {
//   name: 'Santo Domingo',
//   population: 12000,
//   treasury: 23500
// }
