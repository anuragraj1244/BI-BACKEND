const express=require('express')
const Router=express.Router()
const flightModel=require('../models/flightModel')
Router.post('/flightdetails',(req,res)=>{
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
    //userdata.insertOne().then((result)=>res.send('added successfully')).catch((err)=>console.log(err))
})
Router.get('/flightdetail',async(req,res)=>{
    try{const result=awaitflightModel.find({})
res.send(result)
}
catch(err){
res.send('err in ')
}
})

module.exports=Router