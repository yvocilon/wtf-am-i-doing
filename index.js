const { createServer } = require("http");

createServer((req, res) => {
  res.write(`Hello bitches - rolling update`);
  res.end();
}).listen(8080);
