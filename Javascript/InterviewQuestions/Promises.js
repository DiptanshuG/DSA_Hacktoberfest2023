// Promises were introduced to improve the readability and
// manageability of asynchronous code. A Promise represents a future
// value or error and provides a cleaner way to handle asynchronous operations.
// Promises have three states: pending, resolved (fulfilled), and rejected.

// Example of using Promises for an asynchronous operation:

function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const data = "Some data retrieved from the server";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

fetchData("https://example.com/api/data")
  .then((data) => {
    console.log("Data processing:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//   Async/Await
// Async/Await is a more recent addition to JavaScript, offering a more concise and synchronous-like way of dealing with asynchronous code. An async function returns a Promise implicitly, and you can use await within it to pause the function's execution until the Promise is resolved or rejected.

// Example of using Async/Await for an asynchronous operation:

async function fetchData(url) {
  try {
    const response = await fetch(url); // Fetch API returns a Promise
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json(); // Pause execution until resolved
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function processData() {
  try {
    const data = await fetchData("https://example.com/api/data");
    console.log("Data processing:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

processData();

// Asynchronous JavaScript allows you to manage complex operations without blocking the main thread, ensuring smooth user experiences in web applications.
