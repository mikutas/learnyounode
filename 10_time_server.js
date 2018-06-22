const net = require("net");
const server = net.createServer(function(socket){
  let rawDate = new Date();
  let year = rawDate.getFullYear();
  let month =rawDate.getMonth() + 1;
  month = zeroFill(month);
  let date = rawDate.getDate();
  date = zeroFill(date);
  let hour = rawDate.getHours();
  hour = zeroFill(hour);
  let minute = rawDate.getMinutes();
  minute = zeroFill(minute);
  socket.end(`${year}-${month}-${date} ${hour}:${minute}\r\n`);
  socket.on('end', () => {
    process.exit(0);
  });
});

function zeroFill(str){
  return ('00' + str).slice(-2);
}

server.listen(process.argv[2]);
