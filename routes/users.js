var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  res.send('mudou qq coisa');
  
});

module.exports = router;
