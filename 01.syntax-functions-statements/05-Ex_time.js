// Task: Time to Walk.
// Description: Calculate the total time to walk the distance 
// and add a 1-minute break for every 500 meters.

function timeToWalk(numOfSteps, footprintInMeter, speedInKm) {
    let distanceInMeters = numOfSteps * footprintInMeter;                      // 2400 meters
    let speedInMeters = speedInKm * 1000;                                      // 5000 meters
    
    let timeInSec = Math.round((distanceInMeters / speedInMeters) * 60 * 60);  // 1728 sec
    let timeOfStopsSec = Math.floor(distanceInMeters / 500) * 60;              // 240 sec

    let totalTime = timeInSec + timeOfStopsSec;                                // 1968 sec

    let hours = Math.floor(totalTime / 3600);                                  // 0
    let minutes = Math.floor((totalTime % 3600) / 60);                         // 32  
    let seconds = totalTime % 60;                                              // 48

    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);