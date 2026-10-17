// Task: Modify a worker object based on their dizziness.
// Description: If the worker is dizzy, calculate the required amount
// of water, add it to their hydration level, and set dizziness to false.
// Otherwise, return the worker unchanged.

function consctructionCrew(worker) {
    if (worker.dizziness === true) {
        let water = 0.1 * worker.weight * worker.experience;

        worker.levelOfHydrated += water;
        worker.dizziness = false;
    }

    return worker;
}
console.log(consctructionCrew({ weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true }
));
// { weight: 80,
//   experience: 1,
//   levelOfHydrated: 8,
//   dizziness: false };

console.log(consctructionCrew({ weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true }
));
// { weight: 120,
//   experience: 20,
//   levelOfHydrated: 440,
//   dizziness: false };

console.log(consctructionCrew({ weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false }
));
// { weight: 95,
//   experience: 3,
//   levelOfHydrated: 0,
//   dizziness: false };