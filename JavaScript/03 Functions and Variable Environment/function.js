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
