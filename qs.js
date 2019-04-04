var http = require('http');
var util = require('util');

function reqHandler(req,res) {
  var ip = req.connection.remoteAddress || req.socket.remoteAddress;
  ip = ip.replace(/^.*:/,'');
  console.log('Request from: '+ip);
  res.writeHead(200,{'Content-type': 'text/html'});
  res.write('<!doctype html><html><head><title>test</title></head><body><div>cool</div><div><pre>'+ip+'</pre></div></body></html>');
  res.end();
}

http.createServer(reqHandler).listen(8000);
