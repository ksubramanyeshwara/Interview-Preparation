const arr = [5, 1, 4, 2, 3];
const sortedArr = arr.map((element, index) => {
  return `${element} at index ${index} has been doubled to ${element * 2}`;
});

const binary = arr.map((element) => {
  return element.toString(2);
});
console.log(arr);
console.log(binary);
console.log(sortedArr);
