function numberSeven() {
    return 7;
}
console.log(numberSeven());
//
// Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.

function findFactors(number) {
    if (typeof number === "number" && !isNaN(number)) {
        let arr = [];
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                arr.push(i);
            }
        }
        return arr;
    } else {
        return false;
    }
}
console.log(findFactors(6)); // returns [1,2,3,6];
console.log(findFactors(16)); // returns [1,2,4,8,16];
console.log(findFactors(0)); // returns [];
console.log(findFactors(true)); // returns false;
console.log(findFactors("13")); // returns false;
console.log(findFactors([54,72,144])); // returns false;
console.log(findFactors({value: 64})); // returns false;
console.log(findFactors()); // returns false;
//
// Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case-insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.
// w3schools was used to help solve this problem.
function countEs(input) {
    if (typeof input !== "string") {
        return false;
    }
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i).toLowerCase() === "e") {
            count++;
        }
    }
    return count;
}
console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(['e', 'E'])); // returns false;
console.log(countEs()); // returns false;

// Write a function that takes in a string and returns true if the string contains the letter 'e' at least once within the argument. The function should be case-insensitive. If the string does not contain any 'e's it should return false. If the argument is not a string it should return false.
// w3schools was used to help solve this problem.
function countE(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return false;
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'e') {
            count++;
        }
    }

    return count;
}
    console.log(countE("Ease"));
    console.log(countE("teleconference"));
    console.log(countE("TOM"));
    console.log(countE(['e', 'E']));
    console.log(countE());

// Write a function named fizzBuzz that prints to the console the number 1 - 100. If the number is divisible by 3 print fizz instead of the number. If the number is divisible by 5 print buzz. If the number is divisible by both 3 and 5 print fizzBuzz.

function fizzBuzz() {
    for (let i = 1; i <=100; i++ ) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();
