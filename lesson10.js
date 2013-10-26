var net = require('net');

function padded(timeChunk){
  if(timeChunk < 10){
    return '0'+timeChunk;
  }else{
    return ''+timeChunk;
  }
}

function timeFormat(date){
  var year = padded(date.getFullYear());
  var month = padded(date.getMonth()+1);
  var day = padded(date.getDate());
  var hour = padded(date.getHours());
  var minute = padded(date.getMinutes());
  
  return year + "-" + month + "-" + day + " " + hour + ":" + minute;
}

var server = net.createServer(function(socket){
  socket.write(timeFormat(new Date()));
  socket.write('\n');
  socket.end();
}).listen(8000);
