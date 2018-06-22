const http = require("http");

let url = process.argv[2];
http.get(url, (res) => {
  let rawData = '';
  let count = 0;
  res.on('data', (chunk) => {
    rawData += chunk;
  });
  res.on('end', () => {
    console.log(rawData.length);
    console.log(rawData);
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
