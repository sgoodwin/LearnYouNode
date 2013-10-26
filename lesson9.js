var http = require('http'),
    urls = process.argv.slice(2),
    datas = {},
    completed = [];

var get = function(url, callback){
  http.get(url, function(res){
    var response = "";
    res.setEncoding('utf8');

    res.on('data', function(chunk){
      response += chunk;
    });

    res.on('end', function(){
      callback(null, response);
    });
  }).on('error', function(err){
    callback(err, null);
  });
};

function checkDatas(){
  if(completed.length == 3){
    urls.forEach(function(url){
      console.log(datas[url]);
    });
  }
}

urls.forEach(function(url){
  get(url, function(err, data){
    datas[url] = data;
    completed.push(url);
    checkDatas();
  });
});
