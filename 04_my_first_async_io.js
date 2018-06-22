const fs = require("fs");

filePath = process.argv[2];
fs.readFile(filePath, (err, data) => {
  lineArray = data.toString().split('\n');
  console.log(lineArray.length - 1);
});
