const db = require('mongoose');

const msgModel = new db.Schema({
    senderName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }, // ✅ fixed
    read: { type: Boolean, default: false, required: true },
}, { timestamps: true });

module.exports = db.model('Messages', msgModel);