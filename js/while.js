//Create a while loop that uses console.log() to create the output shown below.

let i = 2;

while (i <= 65536) {
    console.log(i);
    i *= 2;
}

//An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
// This is how you get a random number between 50 and 100
//var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
//Math.floor(Math.random() * 5) + 1;
let allCones = Math.floor(Math.random() * 51) + 50;

do {
    let conesToSell = Math.floor(Math.random() * 5) + 1;
    if (allCones >= conesToSell) {
        allCones -= conesToSell;
        console.log(`Customer is purchasing ${conesToSell}. Only ${allCones} left!`);
    } else {
        console.log(`Sorry I cannot  sell ${conesToSell}. We only have ${allCones} left!`);
    }
} while (allCones !==  0);
// Above function statement is example from walkthrough David did in class on 04/20/23: