const Admin=require('../models/admin_model.js');
const bcrypt=require('bcrypt');

const createAdmin= async()=>{
    const hPassword=await bcrypt.hash("info&pub@1234",10);
    const adminData={
        username: "abhijeet",
        email: "abhijeetluwang33m@gmail.com",
        role: 'admin',
        post: 'Info&Pub',
        password: hPassword
    };

    try{
        const existingAdmin= await Admin.findOne({username: adminData.username});
        if(!existingAdmin){
            const newAdmin= new Admin(adminData);
            await newAdmin.save();
            console.log(`Admin account created for ${adminData.username}`);

        }else{
            console.log(`Account already existed for ${adminData.username}`);
        }
    }catch(error){
        console.log(error.message)
    }
};

module.exports=createAdmin;