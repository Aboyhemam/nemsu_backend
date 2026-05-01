const getEvents=require('../scripts/getEvents.js')
const express=require('express');
const router=express.Router();

router.get('/get',getEvents);

module.exports=router;