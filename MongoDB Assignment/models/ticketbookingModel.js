const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://anurag:Anurag%401244@cluster0.pgbhpug.mongodb.net/?retryWrites=true&w=majority').then((res)=>console.log('connected to db')).catch((err)=>console.log('err in connection'))
const ticket=mongoose.Schema
const ticketSchema=new ticket({
    firstname:String,
    lastname:String,
    origin:String,
    destination:String,
    departuredate:String,
    planeCategory:String,
    ticketbook:Boolean
})
const ticketModel=mongoose.model('ticketbookings',ticketSchema)
module.exports=ticketModel
