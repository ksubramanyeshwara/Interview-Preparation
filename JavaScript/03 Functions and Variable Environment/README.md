# Functions and Variable Environment

## Function

A function is a reusable block of code that performs a specific task.

Ways to define a function:

- Function Declaration
- Function Expression
- Arrow Function
- IIFE (Immediately Invoked Function Expression)

### Function Declaration

- Function declaration is “hoisted,” meaning you can call it before it’s defined in the code.
- argument object is available inside the function.
- `this`

```JS
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5
```

### Function Expression

- Not hoisted: Can't be used before assignment
- Behaves like a value (can be passed as arguments)
- You use a variable to store the function expression and it can use `let` or `const`.
- `this`
- **Anonymous Function Expression**

```JS
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3)); // Output: 5
```

```JS
const multiply = function times(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // Output: 20
// console.log(times(4, 5)); // Throws an error: times is not defined (name is local to the function)
```

### Arrow Function

- not hoisted
- No arguments object (use rest parameters instead)
- Implicit return for single expressions
- `this`

```JS
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

### IIFE (Immediately Invoked Function Expression)

- Creates a private scope (pre-module era pattern)
- Avoids polluting global namespace

```JS
(function() {
  console.log("Runs immediately");
})();
```

### Parameters and Arguments

- Parameters are variables listed in the function definition.
- Arguments are actual values passed to the function when it's called.

# Returning Values

Use `return` to send a value back. If omitted, the function returns `undefined`. If we use `console.log()`, `undefined` is printed to the console.

#### Summary

- Use function declarations for general-purpose, reusable functions.
- Use function expressions and arrow functions for callbacks, closures, and when you need lexical this.

## Variable Environment

### Scope:

`var`: Function-scoped. Accessible throughout the entire function, even outside the block it’s declared in.

`let` and `const`: Block-scoped. Limited to the block (e.g., {} inside if, for) where they’re declared, even within a function.

### Hoisting:

`var`: Hoisted to the top of the function and initialized with undefined.

`let` and `const`: Hoisted but not initialized (Temporal Dead Zone). Accessing them before declaration causes a ReferenceError.

### Redeclaration:

`var`: Can be redeclared in the same scope.

`let` and `const`: Cannot be redeclared in the same scope.

### Reassignment:

`var` and `let`: Can be reassigned.

`const`: Cannot be reassigned after declaration.
