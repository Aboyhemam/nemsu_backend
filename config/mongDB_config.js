require('dotenv').config();
const mongoose=require("mongoose");
const dns = require("dns");


const db_URL = process.env.db_URL;

const connectDB = async () => {
    try {
        
        await dns.setServers(["8.8.8.8", "8.8.4.4"])
        await mongoose.connect(db_URL);
        console.log("DB successfully connected");
    } catch (err) {
        console.log("DB connection error:");
        console.log(err);
    }
};

module.exports = connectDB;