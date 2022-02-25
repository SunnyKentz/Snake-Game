const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){

    // HTTP 200 means everything is good
    res.writeHead(200, {
        'Content-Type':'text/html'
    });

    const myHtml = fs.readFileSync('index.html',function(error,data){

        if(error){
            res.write("404");
            res.write("HTML file not found");

        }
        
    });
    
    res.write(myHtml);
    res.end();
});

//write more here

server.listen(8000, function(){

    console.log("listening on port 8000");
})