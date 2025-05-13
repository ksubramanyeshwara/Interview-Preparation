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

## Map

- Map is a higher-order function that takes a callback function as arguments.
- It applies the callback function to each element of the array and returns a new array with the results.
- It does not modify the original array.

```JS
array.map(callback(element, index, array), thisArg);
```

- `element` : The current element being processed in the array.
- `index` : The index of the current element being processed in the array.
- `array` : The array map was called upon.
- `thisArg` : Value to use as `this` when executing callback.

## Filter

- Filter is a higher-order function that takes a callback function as arguments.
- It applies the callback function to each element of the array and returns a new array containing only the elements that satisfy the condition.
- If the condition is true, the element is included in the new array.
- It does not modify the original array.

```JS
array.filter(callback(element, index, array), thisArg);
```

- `element` : The current element being processed in the array.
- `index` : The index of the current element being processed in the array.
- `array` : The array filter was called upon.
- `thisArg` : Value to use as `this` when executing callback.

## Reduce

- Reduce is a higher-order function that takes a callback function as arguments.
- It applies the callback function to each element of the array and returns a single value.
- It does not modify the original array.

```JS
array.reduce(callback(accumulator, element, index, array), initialValue);
```

- `accumulator` : The value to use as the accumulator in the reduction.
- `element` : The current element being processed in the array.
- `index` : The index of the current element being processed in the array.
- `array` : The array reduce was called upon.
- `initialValue` : The initial value to use as the accumulator in the reduction.
