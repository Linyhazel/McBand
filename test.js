var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname +'/front-end/login&signup/'));

app.get('/front-end/tasty-master/home.html',function(request, response){
	response.sendFile(__dirname + "/front-end/login&signup/" + 'index.html');
})

app.post('/register_process', urlencodedParser, function(req,res){
	var response = {
		"name":req.body.name,
		"email":req.body.email,
		"password":req.body.password
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

var server = app.listen(8888, function(){

	var host = server.address().address;
	var port = server.address().port;
	console.log("Testing: Address: http://" + host + ":" + port);
})