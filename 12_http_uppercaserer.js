const map = require("through2-map"); // ストリーム使ってないや
const http = require("http");
const server = http.createServer( (req, res) => {
  if (req.method == "POST"){
    console.log(req.method);
    let body = [];
    req.on('data', (chunk => {
      body.push(chunk);
    })).on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
      body = body.toUpperCase();
      console.log(body);
      res.end(body);
    });
  }
});
server.listen(process.argv[2]);
