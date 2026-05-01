const db=require('mongoose')

const adminSchema=new db.Schema({
    username:{ type: String, unique:true, required:true},
    email:{type:String, unique:true, required:true},
    password:{type:String, required:true},
    role:{type:String, required:true, unique:true}
})

module.exports=db.model('Admin',adminSchema);