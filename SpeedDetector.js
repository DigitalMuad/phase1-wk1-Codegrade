function carSpeedDetector(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    // Validate input
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input");
        return;
    }

    // Check speed and calculate points 
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

//  Example calling the function 
carSpeedDetector(85); // This will output: Points: 3
carSpeedDetector(150); // This will output: License suspended
