const db=require('mongoose')

const noticeModel= new db.Schema({
    title:{type:String, required:true},
    fileUrl:{type:String, required: true}
},{timestamps:true})

module.exports=db.model('Notice',noticeModel)