const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST' ) {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      fs.writeFile('message.txt', message, err => {
        if (err) {
          alert('BROKEN BITCH!!!');
        }
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
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
