var request = require('request');
var fs = require('fs');


request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
.on('error', function (err) {                                   // Note 2
  throw err; 
})
.on('response', function (response) {                           // Note 3
  console.log('Downloading image...');  
  console.log('Response Status Code: ', response.statusCode);
  console.log('Response Status Message: ', response.statusMessage);
  console.log('Content-type: ', response.headers['content-type']);
})
.pipe(fs.createWriteStream('./future.jpg'))
.on('finish', function() {
  console.log('Download complete.')
});               

// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
