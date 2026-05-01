// routes/loginroute.js

const express = require('express');
const router = express.Router();

const { loginAdmin, ipGuard } = require('../controller/adminlogincontroller');

// Apply IP restriction ONLY to login route
router.post('/login', ipGuard, loginAdmin);

module.exports = router;