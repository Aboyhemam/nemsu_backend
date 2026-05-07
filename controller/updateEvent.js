const imagekit = require('../config/imagekit_config.js');
const Event = require('../models/event_model.js');

const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, describe } = req.body;

        // Find existing event
        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({
                message: "Event not found"
            });
        }

        let imageUrls = event.picUrl; // keep old images by default

        // If new images are uploaded
        if (req.files && req.files.length > 0) {
            imageUrls = [];

            for (const file of req.files) {
                const result = await imagekit.upload({
                    file: file.buffer,
                    fileName: file.originalname
                });

                imageUrls.push(result.url);
            }
        }

        // Update event
        event.title = title || event.title;
        event.describe = describe || event.describe;
        event.picUrl = imageUrls;

        await event.save();

        res.status(200).json({
            message: "Event updated successfully",
            event
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = updateEvent;