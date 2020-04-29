const http = require('http');
const express = require('express');
// const routes = require('./routes');
const app = express();

app.use((req, res, next) => {
    console.log("we are here first");
    next();
});

app.use((req, res, next) => {
    console.log("we are here second");
    res.send("<h1>Hello From yo momma</h1>");
});




const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
