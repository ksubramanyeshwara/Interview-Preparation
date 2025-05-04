const radiusArr = [1, 2, 3, 4];

// logic to calculate area
const area = function (radius) {
  return Math.PI * radius * radius;
};

// logic to calculate circumference
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const calculate = function (radiusArr, operation) {
  const output = [];
  for (let i = 0; i < radiusArr.length; i++) {
    output.push(operation(radiusArr[i]));
  }
  return output;
};
console.log(calculate(radiusArr, area));
console.log(calculate(radiusArr, circumference));
