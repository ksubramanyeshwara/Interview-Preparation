const person = { name: "John" };
function greet(greeting, place) {
  console.log(`${greeting}, ${this.name}!`);
  console.log(`${this.name}! are you from ${place}?`);
}
greet.call(person, "Hello", "Europe");

const person1 = {
  name: "Alex",
  city: "New Yorrk",
};

const person2 = {
  name: "Bob",
  city: "London",
};

function introduce(greeting, punctuation) {
  console.log(
    `${greeting} ${this.name}. How is the weather in ${this.city} ${punctuation}`
  );
}

introduce.call(person1, "Hello", "?");
introduce.call(person2, "Hi", "?");

// Method Borrowing from other object

const car = {
  brand: "Toyota",
  getBrand: function () {
    return `${this.brand} brand is from Japan`;
  },
};

const bike = {
  brand: "Yamaha",
  // bike don't have getBrand method
};

console.log(car.getBrand());
console.log(car.getBrand.call(bike));
