let employee = {
  name: "Rajat",
};

function welcome(company) {
  return ` Welcome to ${company}, ${this.name}!`;
}

const bindFunc = welcome.bind(employee, "Google");

console.log(bindFunc());
