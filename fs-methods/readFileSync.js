const fs = require("fs")

console.log("Task 1");

let data = fs.readFileSync("Data.txt","utf8") //Synchronuous execution
console.log(data);

console.log("Task 3");


