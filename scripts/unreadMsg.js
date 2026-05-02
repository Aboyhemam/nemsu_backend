const Msg = require('../models/messageModel.js');

const getunreadMsgs = async (req, res) => {
  try {
    const count = await Msg.countDocuments({ read: false });

    res.status(200).json({
      success: true,
      count
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = getunreadMsgs;