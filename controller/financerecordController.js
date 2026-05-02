const records=require('../models/expense_model.js');

const recordController= async(req,res)=>{
    const { title, type, date, amount, detail }= req.body;

    try{
    if(!title || !type || !amount ||!date){
        return res.status(400).json({
        message: "All fields are required"
      });
    };

    const newRecord= await records.create({
        title,
        type,
        date,
        amount,
        detail
    })
    res.status(201).json({
      status: "Record stored successfully",
      data: newMsg
    });
}catch(error){
    console.error(error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
    

}

}

module.exports=recordController;