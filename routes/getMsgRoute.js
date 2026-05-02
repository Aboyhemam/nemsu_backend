const getMsgs=require('../scripts/getAllMsg.js')
const Message=require('../models/messageModel.js')
const express=require('express');
const router=express.Router();

router.get('/get',getMsgs);
router.patch("/read/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    message.read = true;
    await message.save();

    res.status(200).json({
      success: true,
      message: "Marked as read",
      data: message
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message
    });
  }
});

module.exports=router;