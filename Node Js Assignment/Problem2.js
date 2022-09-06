const http=require("http")
const url=require('url')
const data=[
    {
    "username":"john",
    "age":23,
    "date":22,
    "month":11,
    "year":1998
    }
    
]
const server=http.createServer((req,res)=>{
const parsedURL=url.parse(req.url,true)
const querydatayear=parsedURL.query.year
const querydatamonth=parsedURL.query.month
const querydatadate=parsedURL.query.date
const querydatauname=parsedURL.query.username

if(parsedURL.pathname==="/age"&&req.method==='GET'){
    const result=data.find((item)=>item.year===querydatayear&&item.month===querydatamonth&&item.date===querydatadate&&item.username===querydatauname)

    res.writeHead(200, {'Content-Type': 'text/html'})
   
    res.end("<p>Hello John</p><p>You are currently 23 years old</p>")
    
 }

else{
    res.writeHead(404)
    res.end("Page not found")
}
})
server.listen(3001,()=>console.log("server started"))
