

const Event = require('../models/event_model');

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });

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

module.exports = getAllEvents;