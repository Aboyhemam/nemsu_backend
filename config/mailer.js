// config/mailer.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,      // nesmuofficial@gmail.com
    pass: process.env.EMAIL_PASS       // app password
  }
});

module.exports = transporter;