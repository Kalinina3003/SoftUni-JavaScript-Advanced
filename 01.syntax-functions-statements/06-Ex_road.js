// Task: Road Radar.
// Description: Determine the speed limit by area 
// and print the speeding status if the driver exceeds it.

function roadRadar(speed, area) {
    let speedLimit = 0;

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }

    let overSpeed = speed - speedLimit;

    if (speed > speedLimit) {
        let status = '';

        if (overSpeed <= 20) {
            status = 'speeding';
        } else if (overSpeed <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        return;
    }

    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');