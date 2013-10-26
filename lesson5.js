var fs = require('fs'),
    path = process.argv[2],
    extension = process.argv[3];

fs.readdir(path, function(err, files){
  files.forEach(function(file){
    if(file.lastIndexOf("." + extension) != -1){
      console.log(file);
    }
  });
});
