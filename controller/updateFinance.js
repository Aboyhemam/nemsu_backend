const Finance = require('../models/expense_model.js');

const updateFinanceRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, type, date, amount, detail } = req.body;

        const record = await Finance.findByIdAndUpdate(
            id,
            { title, type, date, amount, detail },
            { new: true, runValidators: true }
        );

        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        return res.status(200).json({ message: "Record updated successfully", data: record });

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = updateFinanceRecord;