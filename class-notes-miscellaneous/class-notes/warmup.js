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