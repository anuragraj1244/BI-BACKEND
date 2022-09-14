const express=require("express")
const server=express()
const fs=require("fs")
const bp = require('body-parser')
server.use(bp.json())

server.post("/student/add",(req,res)=>{
    body=req.body
    fs.appendFile("user.json",JSON.stringify(body),err=>{

    })
    res.status(200).send({
        "result": "Success"
       })
})
server.get("/student/getDetails",(req,res)=>{
    fs.readFile("./user.json",'utf-8',(err,data)=>{
        if (err)
        {
            console.log(err)
        }
        else if(data){
          res.status(200).send(data)    
        }

    })
   
})
server.all('*',(req,res)=>{
    res.status(404).send('file not found')
})

server.listen(3001,()=>{
    console.log("server started at port no 3001")
})