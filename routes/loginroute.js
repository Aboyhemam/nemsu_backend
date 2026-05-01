const express = require('express');
const router = express.Router();

const loginAdmin = require('../controller/adminlogincontroller.js');

router.post('/login', loginAdmin);

module.exports = router;