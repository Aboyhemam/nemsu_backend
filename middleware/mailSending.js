const transporter = require("../config/mailer.js");
const Admin = require("../models/admin_model.js");

const sendAdminMail = async ({ senderName, email, message }) => {
  try {
    
    const admins = await Admin.find().select('email')

    const adminEmails = admins.map(admin => admin.email);

    if (adminEmails.length === 0) {
      console.log("No admin emails found");
      return;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      bcc: adminEmails, // 🔥 use bcc for privacy
      subject: `New Message from ${senderName}`,
      html: `
        <h2>New Message via NEMSU Website</h2>
        <p><strong>Sender Name:</strong> ${senderName}</p>
        <p><strong>Sender Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

  } catch (error) {
    console.error("Email Error:", error.message);
  }
};

module.exports = sendAdminMail;