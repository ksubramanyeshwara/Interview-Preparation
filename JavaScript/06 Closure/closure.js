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
