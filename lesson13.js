var http = require('http'),
    url = require('url');

function toUnixTime(date){
  return date.getTime();
}

function parse(date){
  return { "hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()};
}

http.createServer(function(req, res){
  var incomingURL = url.parse(req.url, true);
  var path = incomingURL.pathname;
  var date = new Date(incomingURL.query.iso);

  if(path === '/api/unixtime'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({"unixtime": toUnixTime(date)}));
  }else if(path === '/api/parsetime'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(parse(date)));
  }else{
    res.writeHead(404);
    res.end('NO API HERE');
  }
}).listen(8000);
