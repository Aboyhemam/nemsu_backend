const fresher=require('../models/fresher_model.js')

const getFresher= async(req,res)=>{
    try{

        const freshers= await fresher.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: freshers.length,
            data: freshers
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

module.exports=getFresher;