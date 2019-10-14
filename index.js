const { createServer } = require("http");

createServer((req, res) => {
  res.write(`Hello bitches`);
  res.end();
}).listen(8080);
