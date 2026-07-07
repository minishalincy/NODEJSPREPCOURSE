const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.end(err.message);
      }
      res.end(data);
    });
  } else if (req.url === "/index.css") {
    fs.readFile("index.css", (err, data) => {
      if (err) {
        res.end(err.message);
      }
      res.end(data);
    });
  } else if (req.url === "/index.js") {
    fs.readFile("index.js", (err, data) => {
      if (err) {
        res.end(err.message);
      }
      res.end(data);
    });
  } else {
    res.end("Page Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server Running");
});
