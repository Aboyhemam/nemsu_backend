const { Resend } = require('resend');
const Admin = require("../models/admin_model.js");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMails = async (senderName, email, message) => {
  try {
    const admins = await Admin.find().select('email');

    const adminEmails = admins
      .map(a => a.email)
      .filter(Boolean);

    if (adminEmails.length === 0) {
      console.log("No admin emails found");
      return;
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: adminEmails,
      subject: `New Message from ${senderName}`,
      html: `
        <h2>New Message via NEMSU Website</h2>
        <p><strong>Name:</strong> ${senderName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendMails;