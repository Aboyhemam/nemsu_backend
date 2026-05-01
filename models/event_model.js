const db=require('mongoose');

const events=new db.Schema({
    title: {type:String, required: true},
    describe: {type:String, required: true},
    picUrl: [{type:String}]
});

module.exports=db.model('Event',events);