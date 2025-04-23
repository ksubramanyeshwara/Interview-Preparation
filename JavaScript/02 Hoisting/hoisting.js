// Question 1
function test() {
  var x;
  var x = 10;
  var x;
  console.log(`X is ${x}`);
}
// test(); // X is undefined

/*
- Multiple declarations of the same variable using var are merged into a single declaration
- Empty declarations (var x;) after a value has been assigned have no effect
- It uses the value of the most recent assignment

After hoisting

function test() {
  var x;       // All declarations are hoisted to the top
  x = 20;      // First assignment
  x = 10;      // Second assignment overwrites 20
  
  Empty declaration has no effect
  console.log(`X is ${x}`);  // Outputs: X is 10
}
*/

// Question 2
function varTest() {
  var x = 1;
  {
    var x = 2;
    console.log(x); // 2
  }
  console.log(x); // 2
}

// varTest(); // var is a function scoped, so redeclared and reassigned

function letTest() {
  let x = 1;
  {
    let x = 2;
    console.log(x); // 2
  }
  console.log(x); // 1
}
// letTest(); // let is block scoped so two different value

// Question 3
function letTest() {
  // let x = 1;
  let x = 2; // SyntaxError: Identifier 'x' has already been declared
  console.log(x);
  console.log(x);
}
// letTest();

// Question 4
var rate = 10;
function getRate() {
  if (rate === undefined) {
    var rate = 6;
    return rate;
  } else {
    return 10;
  }
}
// console.log(`Rate is `, getRate()); // 6 because when a function is called new Execution Context is created and var rate === undefined

