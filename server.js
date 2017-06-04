var express=require("express");

var session=require("express-session");

var MySQLStore=require('express-mysql-session')(session);

var operations=require('./Calculations.js');

var authentication=require('./Authentication.js');

var sessionOptions=require('./sessionDataStore.js');

var sessionStore = new MySQLStore(sessionOptions);

var port=3005;

var sess;

var bodyParser=require("body-parser");

var app=express();

app.use( session({cookie: {maxAge:900000},resave:false,rolling:true,saveUnitialized:false,secret:'abcd123',store:sessionStore}));		     

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.get('/',function(req,resp){
	resp.json({message:'Welcome to calculator application'});
});

app.post('/login',authentication.login)

app.post('/add',operations.add);

app.post('/multiply',operations.multiply);

app.post('/divide',operations.divide);

app.post('/logout',authentication.logout);

app.listen(port,function() {
	console.log('Express listening on port:'+port+'!');
});






