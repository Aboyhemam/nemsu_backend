const express = require('express');
const router = express.Router();
const addRecord=require('../controller/financerecordController.js')
const getRecord=require('../scripts/getFinanceRecords.js')

router.post('/add',addRecord);
router.get('/get',getRecord);

module.exports=router;