// creating a promise
const dataFetch = new Promise((resolve, reject) => {
  // simulating a successful operation
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Operation is successful, Data is fetched");
    } else {
      reject("Operation is failed, Data is not fetched");
    }
  }, 3000);
});

// accessing the promise
dataFetch
  .then((result) => {
    // handle the successful result state
    console.log(result);
  })
  .catch((error) => {
    // handle the error state
    console.log(error);
  });

const userProfile = fetch("https://api.github.com/users/ksubramanyeshwara");
console.log(userProfile);

// Promise chain
userProfile
  .then((response) => {
    return (data = response.json());
  })
  .then((data) => {
    console.log(`User Name is : ${data.name}`);
    return data;
  })
  .then((data) => {
    console.log(`Public Repos numbers : ${data.public_repos}`);
  });
