var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sri Vidya Vilipala' });
});

module.exports = router;