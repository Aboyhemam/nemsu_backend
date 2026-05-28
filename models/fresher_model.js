const db=require("mongoose")

const fresher= new db.Schema({
    name: {type:String},
    parentName: {type:String},
    gender:{type:String, enum:["","Male","Female"],default:""},
    phoneNo:{type:String},
    parentNo:{type:String},
    email:{type:String},
    address:{type:String},
    entry:{type:String, enum:["","NEE I","NEE II (BBA)","NEE II(PCB Forestry)","NEE II(PCM Science)","NEE II(PCM E&T)","JEE","QUET","NEE III","NEPTGET"], deafult:""},
    status:{type:String, enum:["","Selected","Waiting"],default:""}
},{timestamps:true})

module.exports=db.model('Fresher',fresher)