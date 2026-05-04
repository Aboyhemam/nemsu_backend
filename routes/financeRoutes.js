const express = require('express');
const router = express.Router();
const addRecord=require('../controller/financerecordController.js')
const getRecord=require('../scripts/getFinanceRecords.js');
const verify=require('../middleware/financeMiddleware.js')

router.post('/add',verify,addRecord);
router.get('/get',getRecord);

module.exports=router;