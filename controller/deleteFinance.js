const Finance = require('../models/expense_model.js');

const deleteFinanceRecord = async (req, res) => {
    try {
        const { id } = req.params;

        const record = await Finance.findByIdAndDelete(id);

        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        return res.status(200).json({ message: "Record deleted successfully" });

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = deleteFinanceRecord;