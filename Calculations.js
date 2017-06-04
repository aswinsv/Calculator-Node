exports.add=function(req,res){

sess=req.session;

if(!sess.username)
{
	res.send({"message":"You are not currently logged in"});
}	
else
{
	
	var num1=req.body.num1;

	var num2=req.body.num2;


	if(isNaN(num1) || isNaN(num2))
	{
		res.send({"message":"The Numbers you entered are not valid"});
	}	
	else
	{
		num1=parseInt(req.body.num1,10);
		num2=parseInt(req.body.num2,10);
		res.send({"message":"The action was successful","result":num1+num2});
	}	
}	
	
} // add function

exports.multiply=function(req,res){

sess=req.session;

if(!sess.username)
{
	res.send({"message":"You are not currently logged in"});
}	
else
{
	
	var num1=req.body.num1;

	var num2=req.body.num2;


	if(isNaN(num1) || isNaN(num2))
	{
		res.send({"message":"The Numbers you entered are not valid"});
	}	
	else
	{
		num1=parseInt(req.body.num1,10);
		num2=parseInt(req.body.num2,10);
		res.send({"message":"The action was successful","result":num1*num2});
	}	
}	
	
} // mutliply function

exports.divide=function(req,res){

sess=req.session;

if(!sess.username)
{
	res.send({"message":"You are not currently logged in"});
}	
else
{
	
	var num1=req.body.num1;

	var num2=req.body.num2;


	if(isNaN(num1) || isNaN(num2) || parseInt(num2,10)==0)
	{
		res.send({"message":"The Numbers you entered are not valid"});
	}	
	else
	{
		num1=parseInt(req.body.num1,10);
		num2=parseInt(req.body.num2,10);
		res.send({"message":"The action was successful","result":num1/num2});
	}	
}	
	
} // divide function*/
