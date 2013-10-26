var fs = require('fs');

var path = process.argv[2];

var data = fs.readFile(path, function(err, data){
  console.log(data.toString().trim().split('\n').length-1);
});
