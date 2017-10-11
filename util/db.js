var mysql = require('mysql');

function dbcomm(){
  var connection = mysql.createConnection({
    host     : process.env.DB_HOST || 'localhost',
    user     : process.env.DB_USER || 'root',
    password : process.env.DB_PASS || 'univille',
    database : process.env.DB_NAME || 'dacs2017node',
  });

  connection.connect(function(err){
    if(err) {
      console.log("Error connecting database ...\n");
    }
  });

  return connection;
}

module.exports = dbcomm;
