const path = require('path');
const express = require('express');
const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join( __dirname, 'views', '404.html'));
    // res.status(404).send('<h1>Page not found! You should probably not be here</h1>');
});

const hostname = '127.0.0.1';
const port = '3000';

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
