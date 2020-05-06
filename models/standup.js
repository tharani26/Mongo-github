const mongoose=require('mongoose')

const standupSchema=new mongoose.Schema({
    StudentName:{type:String},
    Student_id:{type:String},
    phone:{type:Number},
    course:{type:String},
    Date_of_birth:{type:Date,default:Date.now}
    

}) 

module.exports=mongoose.model('Standup',standupSchema)