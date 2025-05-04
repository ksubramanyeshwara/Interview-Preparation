# Higher Order Functions

A higher-order function is a function that takes another function as an argument or returns a function as a result.

```JS
function callbackFunction() {
    console.log("Callback function executed");
}
function higherOrderFunction(callback) {
    callback();
}
```
