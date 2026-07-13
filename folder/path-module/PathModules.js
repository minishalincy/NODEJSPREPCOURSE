const fs = require("fs");
const path = require("path");

let a = path.join("path-module", "Data.txt");
fs.readFile(a, "utf8", (err, data) => {
  if (err) {
    console.log(err.message);
  }

  console.log(data);
});
