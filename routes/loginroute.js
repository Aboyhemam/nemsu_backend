// routes/loginroute.js

const express = require('express');
const router = express.Router();

const { loginAdmin } = require('../controller/adminlogincontroller');
const authMiddle= require('../middleware/authmiddleware.js');

// Apply IP restriction ONLY to login route
router.post('/login',  loginAdmin);

module.exports = router;