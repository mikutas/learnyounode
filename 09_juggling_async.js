const http = require("http");

const createCounter = () => {
  let privateCount = 0;
  return () => {
      privateCount++;
      return privateCount;
  };
};
const counter = createCounter();

var results = [];

function httpGet(index){
  http.get(process.argv[index+2], (res) => {
    let rawData = '';
    res.on('data', (chunk) => {
      rawData += chunk;
    });
    res.on('end', () => {
      results[index] = rawData;
      const count = counter();
      if (count === 3){
        for(result of results){
          console.log(result);
        }
      }
    });
  })
}

for (let i=0; i<3; i++){
  httpGet(i);
}
