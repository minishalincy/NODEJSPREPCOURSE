const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let user = {
    name: "Minisha",
    age: 21,
    city: "Bengaluru",
  };

  res.end(JSON.stringify(user));
});

server.listen(5000, () => {
  console.log("Server Running");
});
