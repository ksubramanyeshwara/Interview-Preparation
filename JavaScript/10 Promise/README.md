# Promise

Promise is an object that represents the **eventual result(completion or rejection) of an asynchronous operation**.

**Promise has three states**

- Pending : Initial state, neither fulfilled nor rejected. Operation is not completed.
- Fulfilled(Resolved): Operation completed successfully. Promise has a value and this value can be accessed using `then` method.
- Rejected: Operation failed. Promise has an error or reason for rejection. Reason can be accessed using `catch` method.

> Once a Promise is settled (fulfilled or rejected), it cannot transition to another state.

**Real world example**

- Pending : Your order is being prepared.
- Fulfilled(Resolved): Your order is ready and delivered.
- Rejected: Your order is cancelled because kitchen ran out of ingredients.

## Why are Promises Used?

- **Asynchronous Programming**: Promises allow you to handle asynchronous operations in a more readable and maintainable way. API calls, database queries, file reading, network requests, etc.
- **Error Handling**: Promises provide a clear way to handle errors in asynchronous operations.
- **Chaining**: Promises enable you to chain multiple asynchronous operations together, making code more readable and maintainable.

## How Does a Promise Work?

- **Creating a Promise:**

  - A promise is created using the `Promise` constructor, which takes a function with two parameters: `resolve` (for success) and `reject` (for failure).

- **Consuming a Promise:**
  Once a promise is created, you can handle using `.then()` to handle the successful case, `.catch()` to handle errors, and `.finally()` to run code regardless of the outcome.

## Promise creation to resolve and reject

### Promise creation

- `new Promise(executor)` is called
- The Promise constructor creates a new Promise object in the pending state.
- The executor function is executed immediately and synchronously with two arguments: `resolve` and `reject`.

### Executor execution (synchronous)

- Executor runs synchronously.
- The executor function is called immediately with two arguments: `resolve` and `reject`.
- Inside the executor function, asynchronous operation is initiated.

### Asynchronous operation

- The asynchronous operation is performed (e.g., API call, file read, etc.).
- Once the asynchronous operation is completed:
  - `resolve(value)` is called if the promise becomes fulfilled.
  - `reject(error)` is called if the promise becomes rejected.

### Promise state transitions

- Initially, the Promise is pending.
- If the promise is fulfilled , the `.then()` handler is called with the resolved value.
- If the promise is rejected , the `.catch()` handler is called with the rejection reason.
- These handlers are added to the microtask queue and executed after the current call stack is cleared.

```JS
console.log("Script start");

const myPromise = new Promise((resolve, reject) => {
  console.log("Executor starts (synchronous)");

  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    const success = true; // Change to false to test rejection

    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);

  console.log("Executor ends (synchronous)");
});

myPromise
  .then((result) => {
    console.log("Promise fulfilled with:", result);
  })
  .catch((error) => {
    console.log("Promise rejected with:", error);
  });

console.log("Script end");

/*
Script start
Executor starts (synchronous)
Executor ends (synchronous)
Script end
Promise fulfilled with: Operation successful!

or

Promise rejected with: Operation failed!
*/
```

## Promise Chaining

Promise chaining allows you to execute asynchronous operations in a synchronous order, where each operation starts after the previous one completes. This is achieved by returning a Promise from within the `.then()` handler.

## Promise API

API calls are made parallelly.

- `Promise.all([p1, p2, p3, ...])`
  - Resolves only if all promises resolve, returns an array of resolved values in the same order.
  - Rejects immediately if any promise rejects, returns the reason of the first rejection. Subsequent promises are ignored.
- `promise.allSettled()`
  - Resolves when all Promises settle (success or failure)
  - Returns an array of objects describing the outcome of each promise.
- `Promise.race([p1, p2, p3, ...])`
  - Returns the first settled promise (either fulfilled or rejected).
  - Returns the value or reson of the first settled promise.
- `Promise.any([p1, p2, p3, ...])`
  - Returns the first fulfilled promise and returns its value.
  - If all promises are rejected, it throws an `AggregateError`.

# Async/Await

It is a syntactic sugar for Promise. It allows you to write asynchronous code in a synchronous manner, making it easier to read and maintain.

- `Async` : It declares a function as asynchronous. It always returns a Promise. Even if the function returns a value, it wraps it in a Promise and returns a Promise.
- `Await` : It waits for a Promise to settle and returns its value. It can be used only inside an `async` function.
