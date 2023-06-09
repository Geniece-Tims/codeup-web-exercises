/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know

// to the languages array
const user = { name: 'geniece', email: 'geniece.c.tims@gmail.com', languages: ['html', 'css', 'javascript', 'jquery']};
users.push(user);
console.log(users);


// TODO: replace the `var` keyword with `const`, then try to reassign a variable

// declared as `const`
const name = 'your_name_here';
const email = '';
const languages = [];
const modifiedName = name.replace("your_name_here", "geniece");
console.log(modifiedName);


// TODO: rewrite the object literal using object property shorthand

users.push({
  name: name,
  email: email,
  languages: languages
});
users.push({name, email, languages});


// TODO: replace `var` with `let` in the following variable declarations

var emails = [];
var names = [];
const declaration = "var email = [];\nvar names = [];";
const updateDeclaration = declaration.replace(/var/g, "let");
console.log(updateDeclaration);


// TODO: rewrite the following using arrow functions
users.forEach(function(user) {
  return emails.push(user.email);
});
// const sayHello = function (name) {
//  return 'Hello, ' + name + '!';
// };
// const sayHello = (name) => 'Hello, ' + name + '!';
users.forEach((user) => emails.push(user.email));

users.forEach(function(user) {
  return names.push(user.name);
});
users.forEach((user) => names.push(user.name));


// TODO: replace `var` with `let` in the following declaration
var developers = [];
const oldDeclaration = "var developers = [];"
const newDeclaration = oldDeclaration.replace(/var/g, "let");
console.log(newDeclaration);
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const name = user.name;
  const email = user.email;
  const languages = user.languages;
users.forEach(function({name, email, languages }) {
  // TODO: rewrite the assignment below to use template strings
  developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}.`);
});

// TODO: Use `let` for the following variable
var list = '<ul>';
const currentVar = "let list = '<ul>';";
const newVar = currentVar.replace(/var/g, "let");
console.log(newVar);
// TODO: rewrite the following loop to use a for..of loop
developers.forEach(function (developer) {
developer = users;
  for (const developer of developers) {
    console.log(developer);
  }
  // TODO: rewrite the assignment below to use template strings
  list += '<li>' + developer + '</li>';
});
list += '</ul>';

list += <li>${developer}</li>;
});
list += '</ul>';
