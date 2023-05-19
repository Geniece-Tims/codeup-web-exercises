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
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
//
// function extractNames(arr) {
//     let bucket = [];
//     arr.forEach(hamsters) {
//         bucket.push(hamsters.name):
//     });
//     return bucket;
// }
//
// console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];

//Write a function that takes in an array of objects and returns the object with the largest heightInMM property.

// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
// The solution I did myself:
// function extractHeight(arr) {
//     let bucket = [];
//     arr.forEach(hamster => {
//         bucket.push(hamster.heightInMM);
//     });
//     return bucket;
// }
//
// console.log(getTallest(hamsters));
//
// // The correct solution:
// const getTallest = function(arr) {
//   let tallest = {heightInMM: 0};
//   arr.forEach(function(obj) {
//      if (obj.heightInMM > tallest.heightInMM) {
//      }
//    });
//    return tallest;
// };

// Write a function that takes in an array of objects and returns an array of the objects from the array that only have one fur color.
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
// function singleFurColor(arr) {
//     let furColor = [];
//     arr.forEach(function(arr) {
//         if (arr.fur.length === 1) {
//             furColor.push(arr);
//         }
//     });
//     return furColor;
// }
// console.log(singleFurColor(hamsters)); // returns [{name: "Bijou", heightInMM: 75, fur: ['white'], gender: "female", dateOfBirth: "July 10"}];
// answer:
// function singleFurColor(arr) {
//  let newArr = [];
//  arr.forEach(function(elem) {
//      if(elem.fur.length === 1) {
//          newArr.push(elem);
//      }
// })
//
// return newArr;
// }

// Write a function that takes in an array of objects and returns the object with the most colors in the fur array.
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     }, {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     }, {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     }, {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     }, {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
//
// function mostColorful(arr) {
//     let numColors = [];
//     arr.forEach(function (obj) {
//         if (obj.fur.length > numColors.fur.length) {
//             numColors = obj;
//         }
//     })
//
//     return numColors;
// }
//
//
// console.log(mostColorful(hamsters)); // returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"};

// // Write a JavaScript function that takes in a number and returns an object with the following fields: number, which will contain the original number; evenOrOdd, which will contain a string ("even" or "odd") as to whether the value is even or odd; factors, an array of numbers that are evenly divisible within the number passed; and numberOfDigits, a number counting the number of digits with the number passed.
//
// function describeNumber(num) {
//     let arrNum = {
//         number: num,
//         evenOrOdd: num % 2 === 0 ? 'even' : 'odd',
//         factors: [],
//         numberOfDigits: num.toString().length
//     };
//
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             arrNum.factors.push(i);
//         }
//     }
//     return arrNum;
// }
// console.log(describeNumber(19)); // returns {number: 19, evenOrOdd: "odd", factors: [1,19], numberOfDigits: 2};
// console.log(describeNumber(2)); // returns {number: 2, evenOrOdd: "even", factors: [1,2], numberOfDigits: 1};

// Write a JavaScript function that takes in an array of numbers and returns an array of the same length where all of the numbers have been replaced with the number multiplied by 3.

function multiplyElementsByThree(arr) {
    let multipliedArr = []; // man an empty array contained in a new variable to let function know to return an array.
    arr.forEach(num => { //this tells to take each number within each array..
        multipliedArr.push(num * 3); // and multiply it by 3 using push method.
    });
    return multipliedArr; // each number in array will be return multiplied by 3 and inside an array.
}


console.log(multiplyElementsByThree([3,4,5])); // returns [9, 12, 15];
console.log(multiplyElementsByThree([12,8])); // returns [36, 24];
console.log(multiplyElementsByThree([100])); // returns [300];
console.log(multiplyElementsByThree([15, 9, 33, 16, 50])); // returns [45, 27, 99, 48, 150];
