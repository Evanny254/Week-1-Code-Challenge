// Function to calculate demerit points based on the speed
function calculateDemeritPoints(speed) {
    // Constants for speed limit and rate of demerit points per km over the limit
    const speedLimit = 70;
    const rateOfDemeritPoints = 5;

    // Check if the speed is within the speed limit
    if (speed <= speedLimit) {
        console.log("OK"); // Print "OK" if within the speed limit
    } else {
        // Calculate the demerit points for exceeding the speed limit
        const demeritPoints = Math.floor((speed - speedLimit) / rateOfDemeritPoints);

        // Check if demerit points exceed the licence suspension threshold
        if (demeritPoints <= 12) {
            console.log("Still Ok"); // Print "Still Ok" if within the demerit points threshold
        } if (demeritPoints > 12) {
            console.log("License Suspended"); // Print "License Suspended" if exceeding maximum demerit points
        } 
    }
}

