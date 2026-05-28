const express=require("express")
const router=express.Router();

const addFresher=require('./../controller/createfresher');

router.post('/create',addFresher);

module.exports=router;