/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  var contentPromise = new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        reject(err);  
      } else {
        resolve(content.split('\n')[0]);  
      }
      
    });
  });
  
  return contentPromise;
  
  
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  var codePromise = new Promise(function(resolve, reject) {
    request(url, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content.statusCode);
      }
    });
  });
  
  return codePromise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
