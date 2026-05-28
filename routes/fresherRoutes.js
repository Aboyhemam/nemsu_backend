const express=require("express")
const router=express.Router();

const addFresher=require('./../controller/createfresher');
const getFresher=require('./../scripts/getFreshers.js')

router.post('/create',addFresher);
router.get('/get',getFresher);

module.exports=router;