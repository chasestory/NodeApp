const http = require('http');

const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text name="message"><button type="submit">send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  res.write('<html>')
  res.write('<head><title>My home page</title></head>');
  res.write('<body><h1>Hello from the home page</h1></body');
  res.write('</html>');
  res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
