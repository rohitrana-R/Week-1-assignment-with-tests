/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    return 0.01;
}

/*
ans for this 
*/

function calculateTime(n) {
    // Get the start time
    const startTime = new Date();

    // Calculate the sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Get the end time
    const endTime = new Date();

    // Calculate the elapsed time in seconds
    const timeInSeconds = (endTime - startTime) / 1000;
    
    return timeInSeconds;
}

// Example usage
console.log(calculateTime(100)); // Sum from 1-100
console.log(calculateTime(100000)); // Sum from 1-100000
console.log(calculateTime(1000000000)); // Sum from 1-1000000000
