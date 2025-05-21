# this, call, apply, bind

`this` refers to the **context** in which a function is executed. The value of `this` depends on how the function is called not where the function is defined.

## `this` in global context(Outside of any function)

- In a browser, the `this` keyword refers to the `window` object.
- In Node.js, the `this` keyword refers to the `module.exports`. `{}` if nothing is explicitly exported from the module.
- In Node.js, the `this` keyword refers to `global` object, which is often aliased as `globalThis` when the script is directly executed in the console.

## `this` inside a regular function (default binding and not an arrow function, not a method, not called with new)

- Non-strict mode: `this` keyword refers to the `global object` when a regular function is called
  - In a browser, the `this` keyword refers to the `window` object.
  - In Node.js, the `this` keyword refers to the `global` object, which is often aliased as `globalThis`.
- Strict mode: `this` keyword refers to `undefined`. To prevent global object pollution and to make the behaviour of `this` more predictable.

## the value of `this` keyword depends on how the function is called, not where the function is defined.

```JS
"use strict";
function printThis() {
  console.log(this);
}
printThis(); // undefined
window.printThis(); // window
```

In the above code, `this` is called by the `window` object so the value of `this` refers to the `window` object.

## `this` inside a object method

`this` keyword inside an object method refers to that object itself

```JS
const obj = {
  name: "John",
  printThis: function () {
    console.log(this);
    console.log(this.name); // John
  },
};
obj.printThis(); // { name: 'John', printThis: [Function: printThis] }
```

### passing a method to callaback function with `this` keyword

If you call an object method as a callback function without explicitly binding its this context, it will indeed lose its original object context because functions that accepts callback functions takes the function reference.

```JS
const counter = {
  count: 0,
  increment: function () {
    this.count++;
    console.log(this.count);
  },
}
setInterval(counter.increment(), 1000);
```

`this` inside `increment` would be `window` (non-strict) or `undefined` (strict), leading to `NaN` or an error. Solution is to involve `bind`, `call`, `apply`, or arrow functions.

### `this` inside a nested object method

`this` inside a nested object method refers to the immidiate parent object

```JS
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
```

## `this` in constructor function / class constructor

`this` inside a constructor function refers to the newly created object instance. Everytime you call `new` on a constructor function, a new object is created and `this` refers to that new object.

```JS
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar = new Car("Ford", "Mustang", 1969);
console.log(myCar.make); // "Ford"
console.log(myCar.model); // "Mustang"
console.log(myCar.year); // 1969
```

## `this` in arrow function

- Arrow functions do not have their own `this` binding.
- They lexically inherit `this` from their surrounding (enclosing) non-arrow function's scope at the time they are defined, not when they are called.
- The value of `this` inside an arrow function cannot be changed using `call`, `apply`, or `bind`.
- Arrow functions are particularly useful for callbacks and methods where you want to preserve the `this` value of the enclosing context.

## `this` in Nested Functions

```JS
const myObject = {
  myMethod: function() {
    console.log(this);  // myObject
    function nested() {
      console.log(this);  // Window (in non-strict mode)
    }
    nested();
  }
};
myObject.myMethod();
```

`nested()` is called as a standalone function, so this inside it refers to the global object.

To preserve the value of this from the outer function, you can use an arrow function

```JS
const myObject = {
  myMethod: function() {
    const nested = () => {
      console.log(this);  // myObject
    };
    nested();
  }
};
myObject.myMethod();
```
