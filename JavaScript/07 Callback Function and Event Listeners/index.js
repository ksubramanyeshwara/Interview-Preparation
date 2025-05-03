// Synchronous Callback Function
function greet(name, format) {
  console.log("Welcome!");
  console.log(1 + 1);

  return `Hello ${format(name)}`;
}

function format(name) {
  return name.toUpperCase();
}

console.log(greet("K Subramanyeshwara", format));

// Asunchronous Callback Function
console.log("Start");
setTimeout(() => {
  console.log("Asynchronous Callback Function");
}, 5000);
console.log("End");

// Event Listeners
function clickMe() {
  let countClick = 0;
  const button = document.getElementById("button");
  button.addEventListener("click", () => {
    console.log(`Button Clicked ${++countClick} times`);
  });
}
clickMe();
