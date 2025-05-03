function z() {
  var a = 7;
  function y() {
    var b = 10;
    function x() {
      console.log(a, b);
    }
    return x();
  }
  return y();
}
z();

function one() {
  let a = 20;
  function two() {
    return a;
  }
  a = 10;
  return two();
}
console.log(one());
