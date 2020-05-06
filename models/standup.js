const mongoose=require('mongoose')

const standupSchema=new mongoose.Schema({
    productName:{type:String},
    productDesc:{type:String},
    productPrice:{type:Number},
    manufacDate:{type:Date,default:Date.now},
    ExpirationDate:{type:Date,default:Date.now},
    Barcode:{type:Number},

}) 

module.exports=mongoose.model('Standup',standupSchema)