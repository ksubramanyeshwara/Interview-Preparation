const arr = [5, 1, 4, 2, 3, 6, 9, 7, 8];

const tranformedArr = arr.filter((element) => {
  return element > 1 && element % 2 === 0;
});
console.log(arr);
console.log(tranformedArr);
