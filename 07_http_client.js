const http = require("http");

let url = process.argv[2];
http.get(url, (res) => {
  let rawData = '';
  res.on('data', (chunk) => {
    console.log(chunk.toString());
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
