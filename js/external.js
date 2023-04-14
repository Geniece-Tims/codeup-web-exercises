console.log('Hello from external JavaScript!');

alert("Welcome to my Website!");

let userInput = prompt("What is your favorite color?");
console.log('The user entered: ' + userInput);
alert('Great! ' + userInput + ' is my favorite color too!');

let rentLittleMermaid = parseInt(prompt('How many days would like to rent The little mermaid?'));
console.log('The user entered: ' + rentLittleMermaid);
let rentBrotherBear = parseInt(prompt('How many days would you like to rent Brother Bear?'));
console.log('The user entered: ' + rentBrotherBear);
let rentHercules = parseInt(prompt('How many days would you like to rent Hercules?'));
console.log('The user entered: ' + rentHercules);
let day = 3
let price = day * ((rentLittleMermaid) + (rentBrotherBear) + (rentHercules));
alert('Your total is ' + '$' + price);

let payGoogle = 400
let payAmazon = 380
let payFacebook = 350
let hoursFacebook = parseInt(prompt('How many hours did you work at Google?'));
console.log('The user entered: ' + hoursFacebook);
let hoursGoogle = parseInt(prompt(' How many hours did you work at Google?'));
console.log('The user entered: ' + hoursGoogle);
let hoursAmazon = parseInt(prompt('How many hours did you work at Amazon?'));
console.log('The user entered: ' + hoursAmazon);
let pay = (payGoogle * hoursGoogle) + (payAmazon * hoursAmazon) + (payFacebook * hoursFacebook);
alert('My weekly payment will be ' + '$' + pay);

let class_full = confirm(prompt('Is the class full?'));
console.log('The user entered: ' + class_full);
let schedule = confirm(prompt('Does class conflict with schedule?'));
console.log('The user entered: ' + schedule);
    if(class_full && schedule){
        alert("You are enrolled!");
        console.log("You are enrolled!");
} else {
   alert("You cannot enroll!");
   console.log("You cannot enroll!"); }


let prime_member = confirm(prompt('Is member Premium?'));
console.log('The user entered: ' +prime_member);
let coupon_valid = confirm(prompt('Is coupon expired?'));
console.log('The user entered: ' + coupon_valid);
let item_number = confirm(prompt('Are you buying 2 or more items?'));
console.log('The user entered: ' + item_number);
    if(prime_member || coupon_valid && item_number){
        alert("Offer is valid");
        console.log("Offer is valid");
    } else {
        alert("Offer is not valid");
        console.log("Offer is not valid");
    }

