/*
global context
*/

// inside the browser
// console.log(this); // Window { ... }
// console.log(this === window); // true
// this.myGlobalVar = "Hello from global scope";
// console.log(window.myGlobalVar); // "Hello from global scope"

// inside node environment
// console.log(this); // {} (initially, or whatever module.exports is)
// console.log(this === module.exports); // true
// this.myExportedFunction = () => console.log("Exported!");
// this.myExportedFunction();
// module.exports is now { myExportedFunction: [Function] }

/* 
inside a function - non strict mode
*/

// inside the browser

// function printThis() {
//   console.log(this);
// }
// printThis(); // {}
// console.log(this === window); // true

// inside node environment

// function printThis() {
//   "use strict"; // everything will be false in strict mode because we dont want to pollute the global object
//   console.log(this);
//   console.log(this === globalThis); // true
// }
// printThis(); // {}
// console.log(this === globalThis); // false because When you're at the very top level of a Node.js file not inside any function you've defined, and the file is treated as a CommonJS module

// passing a method to callaback function with `this` keyword

const counter = {
  count: 0,
  increment: function () {
    this.count++;
    console.log(this.count);
  },
};
// setInterval(() => {
//   counter.increment();
// }, 1000);

const user = {
  name: "John",
  profile: {
    name: "Bob",
    sayName() {
      console.log(this.name);
    },
  },
};
user.profile.sayName(); // "Bob"

/*
constructor function
*/
function Car(make, model, year) {
  // 'this' here refers to the new object being created by 'new Car(...)'
  this.make = make;
  this.model = model;
  this.year = year;
  this.displayInfo = function () {
    // 'this' here, when displayInfo is called on an instance,
    // will refer to that specific instance.
    console.log(`Car: ${this.year} ${this.make} ${this.model}`);
  };
  console.log(
    `Creating a new car: ${this.make} (this refers to the current instance)`
  );
}

// Create 5 Car objects
const car1 = new Car("Toyota", "Camry", 2021);
const car2 = new Car("Honda", "Civic", 2022);
const car3 = new Car("Ford", "Mustang", 2020);
const car4 = new Car("Tesla", "Model 3", 2023);
const car5 = new Car("BMW", "X5", 2022);

console.log("\nDisplaying info for each car:");
car1.displayInfo();
car2.displayInfo();
car3.displayInfo();
car4.displayInfo();
car5.displayInfo();

// You can see they are distinct objects
console.log("\nAre car1 and car2 the same object?", car1 === car2); // false

