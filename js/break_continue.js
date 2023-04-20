

//Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

for (i = 1; i <= 50; i++) {
    let userInput = prompt("Input an odd number between 1 and 50:");
    if (userInput % 2 !== 0) {
        console.log(userInput);
        alert("Great job! " + userInput + " is an odd number.")
        break;
    }
}
//
// Another way to solve this problem:
// function() {
//    let numToSkip;
//    while (true) {
//      numToSkip = parseInt(prompt("Give me an odd number between 1 and 50!"
//      if (numToSkip >= 1 && numToSkip <= 50 && numToSkip % 2 !== 0) {
//          break;
// ___________________________________________________________________________________________________________________________________________
//Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

for (i = 1; i < 50; i+= 2) {
    let userInput = prompt("Input an odd number between 1 and 50:");
    if (i === numToSkip) {
        console.log(`Oops! Skipping ${numToSkip}`);
        continue;
    }
    console.log(${numToSkip});
}
// Above function statement is example from walkthrough David did in class on 04/20/23: