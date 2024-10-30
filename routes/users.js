var express = require('express');
var router = express.Router();

/* GET users listing. */
let value = 0;
let total = 1;
router.get('/', function(req, res,next) {
  value = value + 2;
  total = total + value;
  res.send('Total is: ' + total);
});

module.exports = router;
