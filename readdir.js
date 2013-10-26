var fs = require('fs');

module.exports = function(path, filter, callback){
  fs.readdir(path, function(err, files){
    if(err)
      return callback(err, []);

    var results = [];
    files.forEach(function(file){
      if(file.lastIndexOf("." + filter) != -1){
        results.push(file);
      }
    });

    callback(null, results);
  });
};
