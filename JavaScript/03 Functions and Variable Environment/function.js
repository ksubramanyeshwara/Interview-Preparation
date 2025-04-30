var x = 1;
a();
b();
console.log(x); // 1

function a() {
  var x = 2;
  console.log(x); // 2
}

function b() {
  var x = 3;
  console.log(x); // 3
}

function c(param) {
  console.log(param);
}

c(d);

function d() {
  console.log("Sent as parameter");
}

function e() {
  return function () {
    console.log("Hello");
  };
}

function f() {
  return function greeting() {
    console.log("Namaste");
  };
}

console.log(e());
console.log(f());
e()();
f()();
