const app=require("express")
const router=app.Router();
const newMember=require("./../controller/createMember.js")

router.post("/add",newMember);

module.exports=router;