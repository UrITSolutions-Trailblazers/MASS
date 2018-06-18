var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    
    var myUrl = url.parse(req.url,true);

    console.log('host -> '+myUrl.host);
    console.log('path -> '+myUrl.pathname);
    console.log('data -> '+myUrl.search);
    var json = myUrl.query;
    console.log('JSON -> '+JSON.stringify(json));

    function route (){
        return myUrl.pathname;
    }

    if(route() == '/home'){
        console.log("Hello world");
    }

}).listen(8086);