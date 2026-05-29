require('dotenv').config();
const freshers=require('./../models/fresher_model.js')
const nodemailer=require("nodemailer")
const HOST=process.env.EMAIL_USER
const KEY=process.env.EMAIL_PASS

const sendEmails= async()=>{
    const dataF= await freshers.find();
    const transporter= nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: HOST,
            pass: KEY
        }
    });
    const mailContents={
        from: HOST,
        to: "markhemam@gmail.com",
        subject: "Trial for Fresher",
        text: `
        Hello dear candidate,
        This is the General Secretary of NEMSU,

        I would like to provide you some information on NEMSU.

        Thank you for any further queries, contact me through this number +91 93628 43841
        or our President Guneshwor Hijam through +91 84347 23878
        `
    }
    const status=await transporter.sendMail(mailContents);
    console.log("Email sent: ", status.response)
}

module.exports=sendEmails;