const imagekit = require('../config/imagekit_config.js');
const Notice = require('../models/notice_model.js');

const uploadNotice = async (req, res) => {
    try {
        const { title } = req.body;

        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded"
            });
        }

        const result = await imagekit.upload({
            file: req.file.buffer,
            fileName: req.file.originalname,
            useUniqueFileName: true
        });

        const newNotice = await Notice.create({
            title,
            fileUrl: result.url
        });

        res.status(201).json({
            message: "Notice created successfully",
            notice: newNotice
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = uploadNotice;