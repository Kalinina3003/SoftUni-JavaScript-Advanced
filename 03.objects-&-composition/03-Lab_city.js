// Task: City Taxes.
// Description: Create a city object with tax rate 
// and methods for managing its population and treasury.

function cityTaxes(cityName, population, treasury) {
    let city = {
        name: cityName,
        population: population,
        treasury: treasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },

        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },

        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100);
        }
    };

    return city;
}
const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);
// {
//   name: 'Tortuga',
//   population: 7000,
//   treasury: 15000,
//   taxRate: 10,
//   collectTaxes: [Function: collectTaxes],
//   applyGrowth: [Function: applyGrowth],
//   applyRecession: [Function: applyRecession]
// }

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
// 85000
// 7350