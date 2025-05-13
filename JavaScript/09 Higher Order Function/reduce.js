const arr = [5, 1, 4, 2, 3, 6, 9, 7, 8];

const sumOfArrElements = arr.reduce((acc, element) => {
  return acc + element;
}, 0);
console.log(sumOfArrElements);

// find max

const maxValue = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(maxValue);
