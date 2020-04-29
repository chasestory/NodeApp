const express = require('express');
const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(shopRoutes);

// const server = http.createServer(app);

const hostname = '127.0.0.1';
const port = '3000';

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
