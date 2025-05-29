/*
spread operator
*/

// combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// copying arrays (shallow copy)
const originalArray = ["a", "b", "c"];
const copiedArray = [...originalArray];
console.log(copiedArray);
copiedArray.push("d");
console.log(copiedArray);
console.log(originalArray);

// function call
function sumOfThreeNumbers(x, y, z) {
  return x + y + z;
}
const threeNumbers = [1, 2, 3];
console.log(sumOfThreeNumbers(...threeNumbers));

// converting string into array
const sayHello = "Hello";
const charArray = [...sayHello];
console.log(sayHello);
console.log(charArray);

// combining objects, adding and overriding property
const obj1 = { name: "KS", age: 25 };
const obj2 = { city: "Mysuru", age: 28 };
const mergedObject = { ...obj1, ...obj2, city: "Bengaluru", country: "India" };
console.log(`mergedObject`, mergedObject);

// copying an object(Shallow Copy)
const copiedObject = { ...mergedObject };
console.log(`copied object`, copiedObject);
copiedObject.city = "Delhi";
console.log(mergedObject); // original object unaffected
