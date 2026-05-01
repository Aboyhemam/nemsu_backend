const msgController=require("../controller/msgController.js");
const express=require('express');
const router=express.Router();

router.post('/new',msgController);

module.exports=router;