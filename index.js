const { createServer } = require("http");

createServer((req, res) => {
  res.write("Hello");
  res.end();
}).listen(8080);
