const Event = require('../models/event_model.js');

const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const record = await Event.findByIdAndDelete(id);

        if (!record) {
            return res.status(404).json({ message: "Event not found" });
        }

        return res.status(200).json({ message: "Event deleted successfully" });

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = deleteEvent;