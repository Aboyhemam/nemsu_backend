

const record = require('../models/expense_model.js');

const getAllRecords = async (req, res) => {
    try {
        const events = await record.find().sort({ createdAt: -1 });

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

module.exports = getAllRecords;