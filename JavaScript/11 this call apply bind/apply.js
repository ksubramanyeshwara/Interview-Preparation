// basic binding
const person = { name: "Rohit", location: "Chennai" };
function introduce(country, state) {
  return `Hi, I am ${this.name}, I am from ${country} and my state is ${state}. I currently live in ${this.location}`;
}

const details = ["India", "Tamil Nadu"];
console.log(introduce.apply(person, details));

const numbers = [4, 6, 2, 8];
const maxNumber = Math.max.apply(null, numbers);
const minNumber = Math.min.apply(null, numbers);
console.log(maxNumber);
console.log(minNumber);
