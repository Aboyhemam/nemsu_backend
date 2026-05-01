const express = require('express');
const router = express.Router();
const getEvents=require('../scripts/getEvents.js')
const { ipGuard } = require('../controller/adminlogincontroller');
const upload = require('../middleware/multer_setup.js');
const uploadEvent = require('../controller/image_upload.js');
// Apply middleware to ALL routes below
router.use(ipGuard);
router.post('/createEvents', upload.array('images'), uploadEvent);
router.get('/getEvents',getEvents);

module.exports = router;