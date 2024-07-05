const express=require('express');
const router=express.Router();
const errorController=require("../controller/errorController");
router.get('*',errorController.error)

module.exports = router;