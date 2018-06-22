const fs = require("fs");

filePath = process.argv[2];
fileStr = fs.readFileSync(filePath).toString();
lineArray = fileStr.split('\n');
console.log(lineArray.length - 1);
