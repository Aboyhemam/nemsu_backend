const app=require("express")
const router=app.Router();
const newMember=require("./../controller/createMember.js")
const upload = require('../middleware/multer_setup.js');
router.post(
  "/add",
  upload.fields([
    { name: "passportPhoto", maxCount: 1 },
    { name: "payment_SS", maxCount: 1 },
    { name: "student_sign", maxCount: 1 },
    { name: "parent_sign", maxCount: 1 }
  ]),
  newMember
);

module.exports=router;