
const http = require('http'), httpProxy = require('http-proxy');
 

var proxy = httpProxy.createProxyServer({});
 
var server = http.createServer(function(req, res) {
    
    console.log(req);
    proxy.web(req, res, { target: 'http://localhost:2019' });

});
 
console.log("listening on port 9000")
server.listen(9000);