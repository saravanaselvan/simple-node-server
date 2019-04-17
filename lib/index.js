const http = require('http');
const fs = require('fs');

const SimpleNodeServer = function (filePath) {
  const server = http.createServer((req, res) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/html'
        });
        res.end("<html><head><title>HTML file not found</title></head><body><p><h2>Please check index.html is available in the root folder</h2></p></body></html>")
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.end(data);
      }
    });
  });

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
}

exports.SimpleNodeServer = SimpleNodeServer;