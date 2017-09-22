var mysql = require('mysql');
function dbcomm(){
	var connection = mysql.createConnection({
	  host     : 'us-cdbr-sl-dfw-01.cleardb.net',
	  user     : 'b7f665afdc7585',
	  password : '10e6779c',
	  database : 'ibmx_1c813c825213c27'
	});

	connection.connect(function(err){
		if(err) {
		    console.log("Error connecting database ... nn");    
		}
	});
	return connection;
}
module.exports = dbcomm;