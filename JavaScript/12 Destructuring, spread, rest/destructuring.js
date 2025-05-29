/*
Array Destructuring
*/
// traditional way
const numbers = [10, 20, 30, 40, 50];
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];
console.log(first, second, third);

// destructuring way
const [a, b, c, d, e] = numbers;
console.log(a, b, c, d, e);

// skip values
const [numOne, , , , numFive] = numbers;
console.log(numOne, numFive);

// Assigning default values
const [, , , , , sixthOne = 60, seventhOne = 70] = numbers;
console.log(sixthOne, seventhOne);

// rest operator
const [firstOne, secondOne, ...rest] = numbers;
console.log(firstOne, secondOne, rest);

/*
Object Destructuring
*/
const person = {
  fullname: "John",
  age: 30,
  position: "Developer",
  address: {
    city: "New York",
    state: "NY",
  },
};

// traditional way
const userName = person.fullname;
const userAge = person.age;
const userPosition = person.position;
console.log(userName, userAge, userPosition);

// destructuring way
const { fullname, age, position, address } = person;
console.log(fullname, age, position, address);

// renaming the variables
const {
  fullname: userNameOne,
  age: userAgeOne,
  position: userPositionOne,
} = person;
console.log(userNameOne, userAgeOne, userPositionOne);

// nested destructuring
const {
  fullname: userNameTwo,
  address: { city, state },
} = person;
console.log(`${userNameTwo} is from ${city}, ${state}`);

// rest operator
const {
  fullname: userNameThree,
  age: userAgeThree,
  position: userPositionThree,
  ...restOne
} = person;
console.log(userNameThree, userAgeThree, userPositionThree, restOne);

// default values
const product = {
  productName: "Battery",
  quantity: 5,
  category: "Electronics",
};

const { productName, price = 999, quantity, category } = product;
console.log(productName, price, quantity, category);

// function parameters destructuring
function createUser({ name, age = 18, isAdmin = false }) {
  return {
    name,
    age,
    isAdmin,
  };
}

const newUser = createUser({ name: "Carol", isAdmin: true });
console.log(newUser);
// { name: "Carol", age: 18, isAdmin: true }
