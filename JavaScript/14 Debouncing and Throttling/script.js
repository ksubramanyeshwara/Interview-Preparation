const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debouncing");
const throttleText = document.getElementById("throttling");

function debounce(cbFun, delay) {
  let timeoutId;

  //  return a new function that will be the one actually called
  return function (...args) {
    // Clear the previous timeout if it exists
    clearTimeout(timeoutId);

    // it holds the reference to the timeout
    timeoutId = setTimeout(() => {
      cbFun.apply(this, args);
    }, delay);
  };
}

// const debouncedText = debounce((data) => {
//   debounceText.textContent = data;
// }, 2000);

// for mousemove
const debouncedText = debounce(() => {
  incrementCount(debounceText);
}, 1000);

// trailing edge with leading call
function throttle(cbFun, delay) {
  let canExecute = true; // Start with 'true' to allow the first call
  let waitingArgs = null;

  return function (...args) {
    if (!canExecute) {
      waitingArgs = args; // Save the most recent arguments
      return;
    }

    cbFun.apply(this, args); // Execute the leading call immediately
    canExecute = false;

    setTimeout(() => {
      if (waitingArgs) {
        cbFun.apply(this, waitingArgs); // Execute the trailing call
        waitingArgs = null;
        // Start another timer to wait for the next potential trailing call
        setTimeout(() => {
          canExecute = true;
        }, delay);
      } else {
        canExecute = true; // If no trailing call, just unlock
      }
    }, delay);
  };
}

// function throttle(cbFun, delay) {
//   let timeoutId;

//   return function (...args) {
//     if (!timeoutId) {
//       cbFun.apply(this, args);
//       timeoutId = setTimeout(() => {
//         timeoutId = null;
//       }, delay);
//     }
//   };
// }

/*
 Trailing Edge Throttle 
 
A trailing edge throttle means:

The function should execute after the delay window has passed.

It should remember the last call and execute it at the end.
*/
// function throttle(cbFun, delay) {
//   let timeoutId;
//   return function (...args) {
//     if (!timeoutId) {
//       timeoutId = setTimeout(() => {
//         cbFun.apply(this, args);
//         timeoutId = null;
//       }, delay);
//     }
//   };
// }

// function throttle(cbFun, delay) {
//   let timeoutId = null;
//   let lastArgs = null;
//   let shouldCallAgain = false;

//   return function (...args) {
//     if (!timeoutId) {
//       cbFun.apply(this, args);
//       timeoutId = setTimeout(() => {
//         if (shouldCallAgain) {
//           cbFun.apply(this, lastArgs);
//           timeoutId = setTimeout(() => {
//             timeoutId = null;
//             shouldCallAgain = false;
//           }, delay);
//         } else {
//           timeoutId = null;
//         }
//       }, delay);
//     } else {
//       shouldCallAgain = true;
//       lastArgs = args;
//     }
//   };
// }

// const throttledText = throttle((data) => {
//   throttleText.textContent = data;
// }, 4000);

// for mousemove
const throttledText = throttle(() => {
  incrementCount(throttleText);
}, 1000);

// input.addEventListener("input", (e) => {
//   defaultText.textContent = e.target.value;
//   debouncedText(e.target.value);
//   throttledText(e.target.value);
// });

// document.addEventListener("mousemove", (e) => {
//   incrementCount(defaultText);
//   debouncedText();
//   throttledText();
// });

function incrementCount(element) {
  element.textContent = (parseInt(element.textContent) || 0) + 1;
}

const incrementButton = document.querySelector(".increment_btn");
const defaultCount = document.querySelector("#default_count");
const debounceCount = document.querySelector("#debounce_count");
const throttleCount = document.querySelector("#throttle_count");

let clickCount = 0;
let debounced = 0;
let throttled = 0;

incrementButton.addEventListener("click", (e) => {
  defaultCount.textContent = ++clickCount;
  debouncedCount();
  throttledCount();
});

const debouncedCount = debounce(() => {
  debounceCount.textContent = ++debounced;
}, 1000);

const throttledCount = throttle(() => {
  throttleCount.textContent = ++throttled;
}, 3000);
