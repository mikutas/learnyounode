const http = require("http");
const url  = require("url");

const server = http.createServer();

server.on('request', (req, res) => {
  let path = url.parse(req.url, true).pathname;
  //console.log(path);
  if (path == "/api/parsetime" ){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    isoStr = url.parse(req.url, true).query.iso;
    date = new Date(isoStr);
    dateObj = { hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()};
    dateJSON = JSON.stringify(dateObj);
    res.end(dateJSON);
  }
  else if (path == "/api/unixtime"){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    isoStr = url.parse(req.url, true).query.iso;
    date = new Date(isoStr);
    dateObj = {unixtime: date.getTime()};
    dateJSON = JSON.stringify(dateObj);
    res.end(dateJSON);
  }
});
server.listen(process.argv[2]);
