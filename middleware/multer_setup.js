// middleware/upload.js
const multer = require('multer');

const storage = multer.memoryStorage(); // store in RAM
const upload = multer({ storage });

module.exports = upload;