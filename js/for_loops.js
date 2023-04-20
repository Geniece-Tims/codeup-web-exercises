// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// source used to solve this problem: https://www.programiz.com/javascript/examples/multiplication-table
function showMultiplicationTable() {
    let i = 7; {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}
showMultiplicationTable();

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
// source used to solve this problem: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-5.php

    for (i = 0; i < 10; i++) {
        let j = Math.floor((Math.random() * 200) + 1);
        if (j % 2 === 0) {
            console.log(j + " is even");
        } else {
            console.log(j + " is odd");
        }
    }

// Create a for loop that uses console.log to create the output shown below.
// source used for this problem: https://www.geeksforgeeks.org/javascript-string-repeat/

for (i = 0; i < 1; i++) {
    let One = "1";
    one = One.repeat(1);
    console.log(one + "\n");
    let Two = "2";
    two = Two.repeat(2);
    console.log(two + "\n");
    let Three = "3";
    three = Three.repeat(3);
    console.log(three + "\n");
    let Four = "4";
    four = Four.repeat(4);
    console.log(four + "\n");
    let Five = "5";
    five = Five.repeat(5);
    console.log(five + "\n");
    let Six = "6";
    six = Six.repeat(6);
    console.log(six + "\n");
    let Seven = "7";
    seven = Seven.repeat(7);
    console.log(seven + "\n");
    let Eight = "8";
    eight = Eight.repeat(8);
    console.log(eight + "\n");
    let Nine = "9";
    nine = Nine.repeat(9);
    console.log(nine + "\n");
}
//
//Shorter way of doing this:
// for (let i = 1; i < 10; i++) {
//      let output = " ";
//      for (let j = 1; j <= i; j++) {
//          output += i;
//      }
//      console.log(output);
// }
//---------------------------------------------------------------------------------------------------------------------

//Create a for loop that uses console.log to create the output shown below.

for (i = 100; i >= 5; i-= 5) {
    console.log(i);
}

