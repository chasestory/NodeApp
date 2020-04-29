const express = require('express');

const router = express.Router();



router.get('/', (req, res, next) => {
  // console.log("running always???")
  next();
})

router.get('/', (req, res, next) => {
  // console.log("Root Page");
  res.send("<h1>Hello From yo momma</h1>");
});

module.exports = router;