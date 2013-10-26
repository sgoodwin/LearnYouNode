var http = require('http'),
    url = process.argv[2];

http.get(url, function(res){
  var response = "";
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    response += chunk;
  });

  res.on('end', function(){
    console.log(response.length);
    console.log(response);
  });
}).on('error', function(err){
  console.log('error: ' + err);
});
