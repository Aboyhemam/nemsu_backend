const getEvents=require('../scripts/getEvents.js')
const express=require('express');
const router=express.Router();

router.use('get',getEvents);

module.exports=router;