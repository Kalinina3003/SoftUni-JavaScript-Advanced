// Task: Town Population.
// Description: Store towns and their population, 
// adding population for duplicate towns.

function townPopulation(arr) {
    let towns = {};

    for (let data of arr) {
        let [town, population] = data.split(' <-> ');

        population = Number(population);

        if (towns[town] === undefined) {
            towns[town] = population;
        } else {
            towns[town] += population;
        }
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
// Sofia : 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
// Istanbul : 101000
// Honk Kong : 2100004
// Jerusalem : 2352344
// Mexico City : 23401925