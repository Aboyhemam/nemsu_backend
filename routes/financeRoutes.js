const express = require('express');
const router = express.Router();

const addRecord    = require('../controller/financerecordController.js');
const getRecord    = require('../scripts/getFinanceRecords.js');
const updateRecord = require('../controller/updateFinance.js');
const deleteRecord = require('../controller/deleteFinance.js');
const verify       = require('../middleware/financeMiddleware.js');

router.get('/get',           getRecord);           // public
router.post('/add',          verify, addRecord);   // protected
router.put('/update/:id',    verify, updateRecord);// protected
router.delete('/delete/:id', verify, deleteRecord);// protected

module.exports = router;