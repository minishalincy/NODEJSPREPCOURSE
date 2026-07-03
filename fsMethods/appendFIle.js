const fs = require("fs");


fs.appendFile("Data.txt","\nhello there!", "utf-8", (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("Data added");
});

