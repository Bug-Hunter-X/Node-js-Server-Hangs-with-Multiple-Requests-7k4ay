const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation asynchronously using a Promise
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000); // Simulate 5 seconds delay
  }).then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});