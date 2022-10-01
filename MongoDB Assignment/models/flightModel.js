const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://anurag:Anurag%401244@cluster0.pgbhpug.mongodb.net/?retryWrites=true&w=majority').then((res)=>console.log('connected to db')).catch((err)=>console.log('err in connection'))
//model
/*const flightModel=mongoose.model('flightdetails',{
    flightNo:Number,
    origin:String,
    destination:String,
    departuredate:String,
    planeCategory:String
})*/
const schema=mongoose.Schema
const flightSchema=new schema({ 
    flightNo:Number,
    origin:String,
    destination:String,
    departuredate:String,
    planeCategory:String

})
const flightModel=mongoose.model('flightdetails',flightSchema)
module.exports= flightModel 