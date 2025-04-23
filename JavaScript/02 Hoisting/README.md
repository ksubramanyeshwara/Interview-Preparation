# Hoisting

Hoisting in JavaScript moves variable and function declarations to the top of their current scope, allowing access before actual declaration.

During the memory creation phase of the execution context, variables are initialized to undefined, while function declarations are stored in memory as they are.

Hoisting works differently for different variable types, function declarations, function expressions and arrow function expression. Function declarations are fully hoisted, while function expressions and arrow function expression behave like variables.

## How Hoisting Works:

- During the compilation phase, the JavaScript engine processes declarations and allocates memory for variables and functions.
- For `var`, it assigns `undefined` during hoisting.
- For `let` and `const`, it reserves memory but leaves the variable uninitialized until the declaration line is executed.
- Function declarations are fully allocated in memory, making them immediately usable.

## Variable Hoisting

Variables declared with `var`, `let`, and `const` are hoisted, but their behavior differs.

### `var` declarations :

- Hoisted and initialized with `undefined`.
- Can be accessed before actual declaration, but returns `undefined`.

```JS
console.log(a); // undefined (not a ReferenceError)
var a = 5;
```

### `let` and `const` declarations :

- Hoisted in TDZ but not initialized.
- Cannot be accessed before declaration.
- Accessing them before declaration results in a `ReferenceError`

```JS
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 5;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 10;
```

## Function Hoisting

Function declarations are hoisted, but their behavior differs.

### function declarations :

- Fully hoisted (declaration + body).
- Can be invoked before the declaration.

```JS
greet(); // "Hello!"
function greet() { console.log("Hello!"); }
```

### function expressions and Arrow functions :

It follow variable hoisting rules.

**With `var` :**

- Hoisted as `undefined` (invoking it throws `TypeError`).
- Can be logged and will not throw any error.

```JS
sayHi(); // TypeError: sayHi is not a function
var sayHi = function() { console.log("Hi!"); };
```

**With `let`/`const` :**

- Hoisted but in TDZ (throws ReferenceError).

```JS
hello(); // ReferenceError: Cannot access 'hello' before initialization
let hello = function() { console.log("Hey!"); };
```

### Class Hoisting

- Class declarations are hoisted but not initialized (similar to `let`/`const`, remain in the TDZ).
- Using a class before declaration throws a `ReferenceError`.

```JS
const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization
class MyClass {}
```

### Best Practices to avoid Hoisting

- Use `let`/`const` instead of `var` to avoid unexpected `undefined` values.
- Declare variables and functions at the top of the scope to make code predictable and easier to read.

> For questions visit the hoisting.js file
