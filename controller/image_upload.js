const imagekit = require('../config/imagekit_config.js');
const Event = require('../models/event_model.js');

const uploadEvent = async (req, res) => {
    try {
        const { title, describe } = req.body;

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "No images uploaded" });
        }

        const imageUrls = [];

        for (const file of req.files) {
            const result = await imagekit.upload({
                file: file.buffer, // buffer from multer
                fileName: file.originalname
            });

            imageUrls.push(result.url); // store URL
        }

        const newEvent = await Event.create({
            title,
            describe,
            picUrl: imageUrls
        });

        res.status(201).json({
            message: "Event created successfully",
            event: newEvent
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = uploadEvent;