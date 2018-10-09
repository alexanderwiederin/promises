/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, content) => {
    console.log(content);
    if (err) {
      callback(err);
    } else {
      // extract from content just the first line
      content = content.split('\n')[0];
      callback(null, content);
      // callback called on what we want to return
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
    
  request(url, (err, content) => {
    if (err) {
      callback(err);
    } else {
      console.log(content);
      callback(null, content.statusCode);
    }
  });
  
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
