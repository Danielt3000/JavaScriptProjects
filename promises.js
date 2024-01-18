const register = false;

let userRegister = new Promise((resolve, reject) => {
  if (register == true) {
    resolve("Welcome User");
  } else {
    reject("you need to login");
  }
});

userRegister
  .then((message) => {
    console.log("this user is " + message);
  })
  .catch((message) => {
    console.log(message);
  });

//   Exercise 1: Promise Chaining and Error Handling

function fetchAndProcessData() {
  const API_ENDPOINT = "https://api.example.com/data";

  return new Promise((resolve, reject) => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((entry) => {
          if (entry == 1) {
            return 1;
          }
        });
        const transformedData = filteredData.map((entry) => {
          entry;
        });
        resolve(transformedData);
      })
      .then((error) => {});
  });
}

// Exercise 2: Asynchronous Operations with Timeout

// Write a function performAsyncOperation that simulates an
// asynchronous operation with a delay using setTimeout. The
// function should take a parameter delay (in milliseconds) and return a
// promise. The promise should resolve after the specified delay. Create multiple
// instances of this function with different delays and log the results once all
// promises are resolved using Promise.all.

// Task:
function perfomAsyncOperation(delay) {
  return new Promise((resolve) => {
    resolve(`Async operation completed after ${delay} milliseconds`);
  }, delay);
}

// Exercise 3: Promise Race for Fastest Response
// Task:
// Create a function racePromises that takes an
// array of promises as input. The function should use
// Promise.race to determine which promise resolves or rejects first.
// Log the result of the fastest promise.

function racePromises(promises) {
  return new Promise((resolve, reject) => {
    Promise.race(promises)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Exercise 4: Promise Race with Timeout
// Task:
// Create a function raceWithTimeout that takes an array of promises and a
// timeout value (in milliseconds). The function should use Promise.race to determine
// which promise resolves first. If none of the promises resolves within the specified
// timeout, reject the race promise with a timeout error. Log the result of the fastest
// promise or the timeout error.

// Implement this without using the setTimeout function directly in the global scope.

function raceWithTimeout(promisesArray, timeout) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout error"));
    }, timeout);
  });

  return Promise.race([...promisesArray, timeoutPromise]);
}
