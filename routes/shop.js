const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<html><body><h1>Hello from the root ("/") page!!</h1></body></html>');
  console.log("running always???")
  next();
})

module.exports = router;