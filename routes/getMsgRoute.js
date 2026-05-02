const getMsgs=require('../scripts/getAllMsg.js')
const express=require('express');
const router=express.Router();

router.get('/get',getMsgs);

module.exports=router;