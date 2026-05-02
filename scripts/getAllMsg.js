

const Msg= require('../models/messageModel.js');

const getAllMsgs = async (req, res) => {
    try {
        const events = await Msg.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: events.length,
            data: events
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = getAllMsgs;