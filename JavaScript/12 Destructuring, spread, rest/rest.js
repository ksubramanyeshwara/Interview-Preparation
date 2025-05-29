// function parameters
function sumOfGivenNumbers(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total = total + num;
  }
  return total;
}
console.log(sumOfGivenNumbers(2, 4, 6));

function studentDetails(name, ...details) {
  return `Student name is ${name} and the details are ${details}`;
}
console.log(studentDetails("KS", 28, " Mysuru"));

const colors = ["red", "green", "blue", "yellow", "black"];
const [firstColor, secondColor, ...remainingColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(remainingColors);

const userProfile = {
  username: "KS",
  email: "YV4bM@example.com",
  age: 29,
  address: {
    city: "Mysuru",
    state: "Karnataka",
  },
};

const { username, email, ...restProfile } = userProfile;
console.log(username);
console.log(email);
console.log(restProfile);
