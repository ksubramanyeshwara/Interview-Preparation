# Asynchronous JavaScript and Event loop

## Asynchronous JavaScript

Asynchronous JavaScript refers to the ability to execute code without blocking the main thread.

Tasks such as network requests, file reading, or timers can be executed asynchronously, allowing other code to run in the meantime.

## Why asunchronous is important?

- JavaScript runs on a single thread (one thing at a time). Blocking operations like network requests or file reads can freeze your app.
- Enables handling thousands of concurrent operations (e.g., Node.js servers).

## Key Mechanisms in Asynchronous JavaScript

- **Callback**: A callback is a function passed as an argument to another function, which is executed once the parent function operation completes.
- **Promises**: An object representing the eventual completion or failure of an asynchronous operation.
- **Async/Await**: Syntactic sugar for promises, making asynchronous code look and behave more like synchronous code.

## Event loop

Event loop allows non-blocking, asynchronous code to be executed without blocking the main thread.

### Components of Event Loop

- **Call Stack**: Executes synchronous code. When a function runs, it’s added to the call stack; when it returns, it’s removed.
- **Web APIs**: Provided by the browser to handle asynchronous APIs (e.g., `setTimeout`, `fetch`) that run outside the call stack.
- **Task Queue**: Stores asynchronous tasks (callbacks, promises, etc.).
  - **Microtask Queue**: It has higher priority than the macrotask queue.
    - Promise resolutions (`.then()`, `.catch()`, `.finally()`)
    - Mutation observer callbacks `queueMicrotask`, and `MutationObserver`.
  - **Macrotask Queue**:
    - Timers (setTimeout, setInterval)
    - I/O operations (e.g., file reading in Node.js)
    - UI events (e.g., clicks or rendering in browsers)

### Event Loop lifecycle

- Execute the synchronous code in the call stack.
- Async operations (e.g., `setTimeout`, `fetch`) are handed to Web APIs.
- When the call stack is empty, the event loop checks the microtask queue.
- It executes all microtasks in the microtask queue until it's empty.
- Then, it checks the macrotask queue.
- It takes one macrotask from the macrotask queue and pushes it onto the call stack for execution.
- Repeat the cycle.

> if you have a pending microtask and a pending macrotask, the microtask will always execute first, even if the macrotask was added to its queue earlier.

### When Does the Event Loop Actually Start?

The event loop starts when the JavaScript engine begins executing a script and runs continuously until there are no tasks left.

### Are Only Asynchronous Web API Callbacks Registered in the Web API Environment?

Yes, only asynchronous operations are registered with the Web API.

### Does the Web API Environment Store Only the Callback Function and Push the Same Callback to the Queue/Microtask Queue?

Yes, the Web API environment primarily stores the callback function you provide and, once the asynchronous operation finishes, pushes that same callback to the appropriate queue.

### How Does It Matter If We Set the Delay for setTimeout to 0ms? Will the Callback Move to the Queue Without Any Wait?

Setting the delay for setTimeout to 0ms doesn’t mean the callback executes immediately. It will still be pushed to the macrotask queue once the event call stack is empty event loop push the callback to the call stack.

> in setTimeout, mentioned delay is the minimum amount of the time the callback will wait before being pushed to the macrotask queue.

## Starvation

Microtask keep calling the other microtask blocking the macrotask queue.