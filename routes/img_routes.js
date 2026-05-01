const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer_setup.js');
const uploadEvent = require('../controller/image_upload.js');

router.post('/create', upload.array('images'), uploadEvent);

module.exports = router;