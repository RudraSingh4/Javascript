//Numbers
let age = 25;
let price = 9.99;
let quantity = 10;

let totalPrice = price * quantity;
console.log(totalPrice); // Output: 99.9

let average = totalPrice / age;
console.log(average); // Output: 3.996

//String
let firstName = "Rudra";
let lastName = 'Pratap';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // Output: John Doe

let message = `Hello, ${firstName}!`;
console.log(message); // Output: Hello, John!

let length = fullName.length;
console.log(length); // Output: 8
//Boolean
let isLogged = true;
let hasPermission = false;

if (isLogged) {
  console.log("User is logged in.");
} else {
  console.log("User is not logged in.");
}

if (!hasPermission) {
  console.log("User does not have permission.");
}
//Undefines and null
let undefinedValue;
console.log(undefinedValue); // Output: undefined

let nullValue = null;
console.log(nullValue); // Output: null

//Symbol
let id1 = Symbol();
let id2 = Symbol("id");

console.log(id1); // Output: Symbol()
console.log(id2); // Output: Symbol(id)

let user = {
  name: "Rudra",
  [id2]: 123
};

console.log(user[id2]); // Output: 123

//Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // Output: 5
console.log(numbers[2]); // Output: 3

numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

numbers.forEach(function(number) {
  console.log(number);
});
//Object
let person = {
    name: "Rudra",
    age: 25,
    hobbies: ["reading", "gaming", "swimming"],
    address: {
      street: "123 Main St",
      city: "New York"
    },
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  console.log(person.name); // Output: John
  console.log(person.hobbies[1]); // Output: gaming
  console.log(person.address.city); // Output: New York
  
  person.sayHello(); // Output: Hello, my name is John.
//function
function addNumbers(a, b) {
    return a + b;
  }
  
  let result = addNumbers(2, 3);
  console.log(result); // Output: 5
  
