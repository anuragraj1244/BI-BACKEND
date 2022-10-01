/*const express=require('express')
const server=express()
const bp=require('body-parser')
server.use(bp.json())
const flightModel=require('./models/flightModel')
server.post('/flightdetails',(req,res)=>{
const data=req.body
const userdata=new flightModel({
    flightNo: data.flightNo,
    origin: data.origin,
    destination: data.destination,
    departuredate: data.departuredate,
    planeCategory: data.planeCategory
})
userdata.save().then((result)=>res.send('added successfully')).catch((err)=>console.log(err))
//console.log(data)
})
server.listen(3001,()=>console.log('server started'))