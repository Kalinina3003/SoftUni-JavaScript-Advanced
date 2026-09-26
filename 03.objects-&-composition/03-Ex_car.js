// Task: Assemble a car from the client's requirements.
// Description: Select the smallest engine that meets the required power,
// create the requested carriage, and set four wheels to the nearest
// lower odd size.

function carFactory(requirements) {
    let car = {
        model: requirements.model,
        engine: {},
        carriage: {
            type: requirements.carriage,
            color: requirements.color
        },
        wheels: []
    };

    if (requirements.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800
        };
    } else if (requirements.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400
        };
    } else {
        car.engine = {
            power: 200,
            volume: 3500
        };
    }

    let wheelSize = requirements.wheelsize;

    if (wheelSize % 2 === 0) {
        wheelSize--;
    }

    car.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    return car;
}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
// { model: 'VW Golf II',
//   engine: { power: 90,
//             volume: 1800 },
//   carriage: { type: 'hatchback',
//               color: 'blue' },
//   wheels: [13, 13, 13, 13] };

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
// { model: 'Opel Vectra',
//   engine: { power: 120,
//             volume: 2400 },
//   carriage: { type: 'coupe',
//               color: 'grey' },
//   wheels: [17, 17, 17, 17] };