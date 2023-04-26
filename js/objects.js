(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Geniece",
        lastName: "Tims",
    }
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person = {
        sayHello: ("Hello from " + (person.firstName) + " " + (person.lastName) + "!"),
    };
    console.log(person.sayHello);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    let discountAmount = 200;
    let discountPercent = .12;
    shoppers.forEach(function (shoppers) {
        if (shoppers.amount > discountAmount) {
            let discount = shoppers.amount * discountPercent;
            let finalAmount = shoppers.amount - discount;
            console.log(shoppers.name + " will pay $" + (finalAmount) + " after a " + (discountPercent) + "% discount was added to his initial balance of $" + (shoppers.amount.toFixed(2)));
        } else {
            console.log(shoppers.name + " does not qualify for the discount and will pay $" + shoppers.amount.toFixed(2) + ".");
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: ["I Know Why The Caged Bird Sings", "Roll Of Thunder, Hear My Cry", "The Hate You Give", "Beloved", "The Color Purple"],
            author: [
                {firstName: "Maya", lastName: "Angelou"},
                {firstName: "Mildred", lastName: "Taylor"},
                {firstName: "Angie", lastName: "Thomas"},
                {firstName: "Toni", lastName: "Morrison"},
                {firstName: "Alice", lastName: "Walker"},
            ]
        },
    ];
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        for (let j = 0; j < book.title.length; j++) {
            console.log(book.title[j]);
        }
        for (let j = 0; j < book.author.length; j++) {
            console.log(book.author[j].firstName);
            console.log(book.author[j].lastName);
        }
        }





    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books = [
        {
            title: ["I Know Why The Caged Bird Sings", "Roll Of Thunder, Hear My Cry", "The Hate You Give", "Beloved", "The Color Purple"],
            author: [
                {firstName: "Maya", lastName: "Angelou"},
                {firstName: "Mildred", lastName: "Taylor"},
                {firstName: "Angie", lastName: "Thomas"},
                {firstName: "Toni", lastName: "Morrison"},
                {firstName: "Alice", lastName: "Walker"},
            ]
        },
    ];
    for (let i = 0; i < books[0].title.length; i++) {
        console.log(`Book # ${i + 1}`);
        console.log(`Title: ${books[0].title[i]}`);
        console.log(`Author: ${books[0].author[i].firstName} ${books[0].author[i].lastName}`);
        console.log("---");
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // Cody's solution for Bonus Problem:
//     function createBook(title, firstName, lastName){
//         let bookObject = {
//             title: title,
//             author: {
//                 firstName: firstName,
//                 lastName: lastName
//             }
//         }
//         books.push(bookObject);
//     }
//
//     createBook("book.title", "book.author.firstName","book.author.lastName");

})();