const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/FlightTravllingDetails').then((res)=>console.log('connected to db')).catch((err)=>console.log('err in connection'))
//model
const schema=mongoose.Schema
const flightSchema=new schema({ 
    flightNo:Number,
    origin:String,
    destination:String,
    departuredate:Number,
    planeCategory:String

})
const flightModel=mongoose.model('flightdetails',flightSchema)
constschema=mongoose.Schema
const ticketSchema=new schema({
    origin:String,
    destination:String,
    departuredate:Number,
    planeCategory:String,
    firstname:String,
    lastname:String,
    age:Number,
    email:String
})
const ticketModel=mongoose.model('ticketbooking',ticketSchema)

//insert mongoose
const data1=new flightModel({
    flightNo: 1234334,
    origin:'Lucknow',
    destination:'Mumbai',
    departuredate:20/9/2022,
    planeCategory:'Cargo'
})
data1.save().then((res)=>console.log('data is inserted')).catch((err)=>console.log('insert failed'))