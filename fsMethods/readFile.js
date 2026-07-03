const fs = require("fs");

console.log("Task 1");

fs.readFile("Data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
  }
  console.log(data);
});

console.log("Task 3");
