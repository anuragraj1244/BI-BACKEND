const express=require("express")
const server=express()
server.get("/student/studentsList",(req,res)=>{
    res.status(200).send(
        {
            "results": [
            "Rajesh",
            "Ramesh",
            "Sayali",
            "Sanjana"
            ]
           }
    )
})
server.all('*',(req,res)=>{
    res.status(404).send('file not found')
})

server.listen(8080,()=>{
    console.log("server started at port no 8080")
})