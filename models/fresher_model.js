const db=require("mongoose")

const fresher= new db.Schema({
    name: {type:String},
    parentName: {type:String},
    phoneNo:{type:String},
    parentNo:{type:String},
    email:{type:String},
    address:{type:String},
    entry:{type:String, enum:["","NEE I","NEE II","NEE III"], deafult:""},
    status:{type:String, enum:["","Selected","Waiting"],default:""}
},{timestamps:true})

module.exports=db.model('Fresher',fresher)