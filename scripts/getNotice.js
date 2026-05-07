const Notice=require('../models/notice_model.js')

const getAllNotices = async (req, res) => {
    try {
        const notices = await Notice.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: notices.length,
            data: notices
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports=getAllNotices;