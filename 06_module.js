const fs = require("fs");

module.exports = function (dir, extStr, callback){
  fs.readdir(dir, (err, data) => {
    if(err){
      return callback(err);
    }
    let filtered = [];
    for (element of data){
      ext = new RegExp(`.${extStr}`);
      if (element.match(ext)){
        filtered.push(element);
      }
    }
    callback(null, filtered);
  });
}