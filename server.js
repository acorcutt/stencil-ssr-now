const http = require('http');

const render = require('./api/render2');

const hostname = '127.0.0.1';
const port = 3001;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

const server = http.createServer(render);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
