const db=require("mongoose");

const member= new db.Schema({
    firstName:{type:String,required:true},
    middleName:{type:String},
    lastName:{type:String,required:true},
    gender:{type:String,enum:["","Male","Female"],default:"",required:true},
    DOB:{type:String,required:true},
    address:{type:String,required:true},
    district:{type:String,require:true},
    pin:{type:String,required:true},
    state:{type:String,required:true},
    course:{type:String,required:true},
    department:{type:String,required:true},
    admissionYear:{type:String,required:true},
    admittedThrough:{type:String,required:true},
    fatherName:{type:String,required:true},
    motherName:{type:String,required:true},
    phoneNo:{type:String,required:true},
    email:{type:String,required:true},
    parentPhoneNo:{type:String,required:true},
    passportPhoto_fileId: { type: String,required:true },
    student_sign_fileId:  { type: String ,required:true},
    parent_sign_fileId:   { type: String ,required:true},
    payment_SS_fileId:    { type: String,required:true },


});

module.exports=db.model("Member",member);