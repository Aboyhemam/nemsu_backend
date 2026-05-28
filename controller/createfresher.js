const fresher=require('./../models/fresher_model.js')

const createFresher= async(req,res)=>{
    const { name, parentName, phoneNo, parentNo, email, address, entry, status }=req.body;
    try{
        if( !name || !parentName || !phoneNo || !parentNo || !email || !address || !entry || !status ){
            return res.status(400).json({message: "All fields are required"});
        }
        const newPerson= await fresher.create({
            name,
            parentName,
            phoneNo,
            parentNo,
            email,
            address,
            entry,
            status
        })

        return res.status(201).json({
            message:"Form filled successfully",
            data: newPerson
        })
    }catch(error){
        console.log(error.message)
        return res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

module.exports=createFresher;