const Msg = require('../models/messageModel.js');

const msgController = async (req, res) => {
  try {
    const { senderName, email, message } = req.body;

    // ✅ Validation
    if (!senderName || !email || !message) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // ✅ Save directly
    const newMsg = await Msg.create({
      senderName,
      email,
      message
    });

    res.status(201).json({
      status: "Message stored successfully",
      data: newMsg
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

module.exports = msgController;