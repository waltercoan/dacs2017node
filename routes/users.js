var express = require('express');
var dbutil = require('../util/db');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var conn = dbutil();
  conn.query('select * from tbuser',
    function(err,rows,fields){
        console.log(rows);
        //res.render('contact',{data:rows});
        res.send('mudou qq coisa');
    }
  );
});

module.exports = router;
