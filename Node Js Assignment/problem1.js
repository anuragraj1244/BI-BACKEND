var http = require('http')
var fs = require('fs')
var server=http.createServer((req,res)=>{
    var data=fs.readFileSync("./file.txt","utf8")
    if(req.url==="/vegetables"&&req.method==='GET'){
        res.writeHead(200)
        res.end(data)

    }
    else{
        res.writeHead(404)
        res.end("Page not found")
    }
})
server.listen(8080,()=>console.log("server started"))