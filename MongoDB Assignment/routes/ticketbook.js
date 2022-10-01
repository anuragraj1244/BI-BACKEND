const express=require('express')
const Router=express.Router()
const ticketModel=require('../models/ticketbookingModel')
Router.post('/ticketbooking',(req,res)=>{
    const data=req.body
    const userdata=new ticketModel({
        firstname:data.firstname,
        lastname:data.lastname,
        origin:data.origin,
        destination:data.destination,
        departuredate:data.departuredate,
        planeCategory:data.planeCategory,
        ticketbook:data.ticketbook
    })
    userdata.save().then((result)=>res.send('added successfully')).catch((err)=>console.log(err))
  //  userdata.i().then((result)=>res.send('added successfully')).catch((err)=>console.log(err))
    //console.log(data) 
    //userdata.insertOne().then((result)=>res.send('added successfully')).catch((err)=>console.log(err))
})

module.exports=Router