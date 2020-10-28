var fs = require('fs')
var http =require('http')
var server = http.createServer(function(req,res){
  console.log('request was made:' + req.url)
  if (req.url === '/'|| req.url ==='/'){
    res.writeHead(200,{'content-type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8').pipe(res);
  }  else {
    res.writeHead(404,{'content-type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/404.html','utf8').pipe(res);
  }
});

server.listen(8081, '127.0.0.1');
