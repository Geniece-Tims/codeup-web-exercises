// function numberSeven() {
//     return 7;
// }
// console.log(numberSeven());
// //
// // Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.
//
// function findFactors(number) {
//     if (typeof number === "number" && !isNaN(number)) {
//         let arr = [];
//         for (let i = 1; i <= number; i++) {
//             if (number % i === 0) {
//                 arr.push(i);
//             }
//         }
//         return arr;
//     } else {
//         return false;
//     }
// }
// console.log(findFactors(6)); // returns [1,2,3,6];
// console.log(findFactors(16)); // returns [1,2,4,8,16];
// console.log(findFactors(0)); // returns [];
// console.log(findFactors(true)); // returns false;
// console.log(findFactors("13")); // returns false;
// console.log(findFactors([54,72,144])); // returns false;
// console.log(findFactors({value: 64})); // returns false;
// console.log(findFactors()); // returns false;
// //
// // Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case-insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.
// // w3schools was used to help solve this problem.
// function countEs(input) {
//     if (typeof input !== "string") {
//         return false;
//     }
//     let count = 0;
//     for (let i = 0; i < input.length; i++) {
//         if (input.charAt(i).toLowerCase() === "e") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countEs("Ease")); // returns 2;
// console.log(countEs("teleconference")); // returns 5;
// console.log(countEs("TOM")); // returns 0;
// console.log(countEs(true)); // returns false;
// console.log(countEs(['e', 'E'])); // returns false;
// console.log(countEs()); // returns false;
//
// // Write a function that takes in a string and returns true if the string contains the letter 'e' at least once within the argument. The function should be case-insensitive. If the string does not contain any 'e's it should return false. If the argument is not a string it should return false.
// // w3schools was used to help solve this problem.
// function countE(str) {
//     if (typeof str !== 'string' || str.length === 0) {
//         return false;
//     }
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === 'e') {
//             count++;
//         }
//     }
//
//     return count;
// }
//     console.log(countE("Ease"));
//     console.log(countE("teleconference"));
//     console.log(countE("TOM"));
//     console.log(countE(['e', 'E']));
//     console.log(countE());
//
// // Write a function named fizzBuzz that prints to the console the number 1 - 100. If the number is divisible by 3 print fizz instead of the number. If the number is divisible by 5 print buzz. If the number is divisible by both 3 and 5 print fizzBuzz.
//
// function fizzBuzz() {
//     for (let i = 1; i <=100; i++ ) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzBuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();
//
// // Create a do-while loop that starts at 2, and displays the number squared on each line while the number is less than 1,000,000. Output should equal:
// // 2
// //  4
// //  16
// //  256
// //  65536
//
// let num = 2;
//
// do {
//     console.log(num);
//     num = num * num
// } while (num < 1000000);
//
// // // Write a function that takes in an array of numbers and returns all of the numbers added together (We'll be assuming that only arrays are going to be used with this function).
// //
// function addEmUp(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; sum += arr[i++]);
//         return sum;
// }
// console.log(addEmUp([2,6,19])); // returns 27
// console.log(addEmUp([-99, 180, -5])); // returns 76
// console.log(addEmUp([44,10,7])); // returns 61
// console.log(addEmUp([-100])); // returns -100
// console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
// console.log(addEmUp([-13, -92, -3500])) // returns -3605
//
// // Write a function that takes in a string and returns an object describing the string. The object should have a string property that contains the original string, a numberOfEs property that contains a count of the number of e's in the string (case-insensitive), and an isEvenLength property that contains a boolean for whether the string's length is even or not.
//
// function explainString(str) {
//     const obj = {
//         string: str,
//         numberOfEs: str.toLowerCase().split('e').length - 1,
//         isEvenLength: str.length % 2 === 0
//     };
//     return obj;
// }
// console.log(explainString("cheese")); // returns {string: "cheese", numberOfEs: 3, isEvenLength: true}
// console.log(explainString("dog")); // returns {string: "dog", numberOfEs: 0, isEvenLength: false}
// // Another way to do this:
// // function explainString(str) {
// //         return {
// //             string; str;
// //             numberofEs: countEs(str),
// //             isEven: str.length % 2 === 0
// //         }
// //  }

// // Write a function that takes in an array of objects and returns an array containing all of the names from the original array.
//
const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function extractNames(arr) {
    let bucket = [];
    arr.forEach(hamsters) {
        bucket.push(hamsters.name):
    });
    return bucket;
}

console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];

