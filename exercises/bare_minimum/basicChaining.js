/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var promisification = require('./promisification.js');
var promiseConstructor = require('./promiseConstructor.js');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  
  return promiseConstructor.pluckFirstLineFromFileAsync(readFilePath)
    .then((username) => promisification.getGitHubProfileAsync(username))
    .then((response) => {
      return fs.writeFileAsync(writeFilePath, JSON.stringify(response));
    });
};

// fetchProfileAndWriteToFile = Promise.promisify(fetchProfileAndWriteToFile);

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
