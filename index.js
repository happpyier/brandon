var express = require('express');
var app = express();
var path = require("path");
app.set('port', (process.env.PORT || 5000));
//format is {"ipaddress":"107.144.151.227","language":"en-US","software":"Windows NT 6.1; WOW64"}
app.get('/', function(request, response) {
	var requestObjects = Object.keys(request);
	response.send('Welcome to my rhb--microservice page<br/>The request objects are<br/>'+requestObjects); 
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
