const app=require("express")
const router=app.Router();
const newMember=require("./../controller/createMember.js")
const upload = require('../middleware/multer_setup.js');
router.post("/add",upload.array("images"),newMember);

module.exports=router;