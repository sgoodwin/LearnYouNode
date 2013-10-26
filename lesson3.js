var fs = require('fs');

var path = process.argv[2];

var data = fs.readFileSync(path);
console.log(data.toString().trim().split('\n').length-1);
