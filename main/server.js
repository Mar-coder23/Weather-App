const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000; // You can change the port number here

const server = http.createServer((req, res) => {
  // Set the file path to look inside the 'main' folder
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  // Ensure the correct file path is being used
  console.log('File requested:', filePath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>File Not Found</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
