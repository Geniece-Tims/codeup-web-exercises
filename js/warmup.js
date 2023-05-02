function numberSeven() {
    return 7;
}
console.log(numberSeven());

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

// Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.

function countEs(input) {
    if (typeof input === "string") {
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