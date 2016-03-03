var express = require('express');
var app = express();
var path = require("path");
app.set('port', (process.env.PORT || 5000));
//format is {"ipaddress":"107.144.151.227","language":"en-US","software":"Windows NT 6.1; WOW64"}
//_readableState,readable,domain,_events,_maxListeners,socket,connection,httpVersionMajor,httpVersionMinor,httpVersion,
//complete,headers,rawHeaders,trailers,rawTrailers,_pendings,_pendingIndex,upgrade,url,method,statusCode,statusMessage,
//client,_consuming,_dumped,next,baseUrl,originalUrl,_parsedUrl,params,query,res,route
app.get('/', function(request, response) {
	var requestObjects = Object.keys(request.connection.domain);
	var requestedItem = 'request.connection';
	response.send('Welcome to my rhb--microservice page<br/>The request objects are<br/>'+requestObjects+'<br/>The request item is<br/>'+requestedItem); 
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
