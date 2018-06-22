const fs   = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  let header = {'Content-Type': 'text/plain'};
  res.writeHead(200, header);
  fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(process.argv[2]);
