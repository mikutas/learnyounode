const mymod = require("./module_program6");

let dir = process.argv[2];
let extStr = process.argv[3];

mymod(dir, extStr, (err, filtered) => {
  if (err){
    throw err;
  }
  for (element of filtered){
    console.log(element);
  }
});
