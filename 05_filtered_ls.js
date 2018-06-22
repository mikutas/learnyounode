const fs = require("fs");

let dirPath = process.argv[2];
fs.readdir(dirPath, (err, data) => {
  let filtered = [];
  for (element of data){
    ext = new RegExp(`.${process.argv[3]}`);
    if (element.match(ext)){
      filtered.push(element);
    }
  }
  for (element of filtered){
    console.log(element);
  }
});
