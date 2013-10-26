var http = require('http'),
    fs = require('fs'),
    path = process.argv[2];

http.createServer(function(req, res){
  var readStream = fs.createReadStream(path);
  readStream.pipe(res);
}).listen(8000);
