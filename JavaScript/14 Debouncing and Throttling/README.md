# Debouncing and Throttling

Debouncing and Throttling are used to improve performance by limitting the number of times a funcion is called, especially with events like scrolling or typing.

## Debouncing

Debouncing ensures that a function is called only after a certain period of inactivity. This is useful for scenarios like search input where you want to wait until the user has stopped typing before making an API call.

```JS
function debounce(cbFun, delay) {
  let timeoutId;

  //  return a new function that will be the one actually called
  return (...args) => {
    // Clear the previous timeout if it exists
    clearTimeout(timeoutId);

    // it holds the reference to the timeout
    timeoutId = setTimeout(() => {
      cbFun.apply(this, args);
    }, delay);
  };
}

function greet(name) {
  console.log(`Hello, ${name}!`);
}
// passing the function reference
// When passing a function with arguments to debounce (or setTimeout, setInterval) use  an anonymous function or bind
const debouncedVersion = debounce(() => greet("KS"), 3000);
debounce(greet.bind(null, "KS"), 3000);
debouncedVersion();

```

## Throttling

Throttling ensures that a function is called at most once in a specified time interval. This is useful for scenarios like scrolling where you want to limit the number of times a function is called while the user is scrolling.
