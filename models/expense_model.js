const db=require('mongoose');

const financeRecords= new db.Schema({
    title:{type:String, required:true},
    type:{type:String, enum:["Incoming","Outgoing"],required:true,default:"Outgoing"},
    date:{type:Date, required:true},
    amount:{type:Number, required:true},
    detail:{type:String}

},{timestamps:true});

module.exports=db.model('FinanceRecords',financeRecords);