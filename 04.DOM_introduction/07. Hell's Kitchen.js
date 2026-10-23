// Task: Restaurant 
// Description: Process restaurants and their workers, calculating average and best salaries. 
// Merge workers when a restaurant is added more than once. 
// Find the restaurant with the highest average salary. 
// Sort its workers by salary in descending order and display the results.

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = document.querySelector('textarea').value;
      const restaurantsData = JSON.parse(input);

      const restaurants = new Map();

      for (const restaurantData of restaurantsData) {
         const [restaurantName, workersData] = restaurantData.split(' - ');

         if (!restaurants.has(restaurantName)) {
            restaurants.set(restaurantName, []);
         }

         const workers = restaurants.get(restaurantName);
         const workersList = workersData.split(', ');

         for (const workerData of workersList) {
            const lastSpaceIndex = workerData.lastIndexOf(' ');
            const workerName = workerData.substring(0, lastSpaceIndex);
            const salary = Number(workerData.substring(lastSpaceIndex + 1));

            workers.push({
               name: workerName,
               salary: salary
            });
         }
      }

      let bestRestaurantName = '';
      let bestAverageSalary = -Infinity;
      let bestSalary = 0;
      let bestWorkers = [];

      for (const [restaurantName, workers] of restaurants) {
         const totalSalary = workers.reduce((sum, worker) => sum + worker.salary, 0);

         const averageSalary = totalSalary / workers.length;
         const highestSalary = Math.max(...workers.map(worker => worker.salary));

         if (averageSalary > bestAverageSalary) {
            bestAverageSalary = averageSalary;
            bestRestaurantName = restaurantName;
            bestSalary = highestSalary;
            bestWorkers = workers;
         }
      }

      bestWorkers.sort((a, b) => b.salary - a.salary);

      const bestRestaurantOutput =
         `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

      const workersOutput = bestWorkers
         .map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`)
         .join(' ');

      document.querySelector('#bestRestaurant p').textContent = bestRestaurantOutput;
      document.querySelector('#workers p').textContent = workersOutput;
   }
} 
