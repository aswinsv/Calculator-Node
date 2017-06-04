var connectionPool=require('./Connection.js');


exports.login=function(req,resp){

	var user_name=req.body.username;
	var password=req.body.password;

	
	connectionPool.getConnection(function(err, connection) {

		connection.query('select * from users where Username= ?',[user_name],function(err,result,fields){

		if(err) {

			res.send({
				"message":"There is an error in the query!!"
			});

			connection.release();
		} //end of if

		else{

			if(result.length>0){

				if(result[0].password === password){

					req.session.username = result[0].firstname;

					sess=req.session.username;

					resp.send({
						"message":"Welcome "+req.session.username
					});

				}

				else{

					resp.send({
						"message":"There seems to be an error in the username and password combination you entered!!"
					});
			}
		}

				else{

					resp.send({
						"message":"There seems to be an error in the username and password combination you entered!!"
					});
			}
		} //outer else

		}); // end of query
	

		connection.release();
  }); // end of createConnection
} // end of login

exports.logout=function(req,res){
	console.log("Logging out");

	if(req.session.username)
	{
		res.send({"message":"You have been successfully logged out"});
		req.session.destroy();
	}
	else
		res.send({"message":"You are not currently logged in"});
		
} // end of logout















